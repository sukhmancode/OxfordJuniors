import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from '../firebase/firebase';
import toast from 'react-hot-toast';
import AdminDash from './AdminDash';

interface User {
  uid: string;
  displayName?: string | null;
  email?: string | null;
  photoURL?: string | null;
}
const Admin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [logoutTimer, setLogoutTimer] = useState<NodeJS.Timeout | null>(null); // State to store logout timer

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        setUser({ uid, displayName, email, photoURL });
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
      clearLogoutTimer();
    };
  }, []);

  useEffect(() => {
    if (user) {
      setLogoutTimer(setTimeout(logoutUser, 15 * 60 * 10000));
    } else {
      clearLogoutTimer();
    }
  }, [user]);

  const clearLogoutTimer = () => {
    if (logoutTimer) {
      clearTimeout(logoutTimer);
      setLogoutTimer(null);
    }
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success('logged out');
      })
      .catch(error => {
        console.error('Error signing out:', error);
        toast.error('Failed to logout');
      });
  };

  const handleLogin = () => {
    if (!user) {
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          setUser(userCredential.user);
          setLogoutTimer(setTimeout(logoutUser, 15 * 60 * 10000));
          toast.success('Successfully logged in');
        })
        .catch(error => {
          console.error('Error signing in:', error);
          toast.error('Failed to login');
        });
    } else {
      toast.error('Another user is already logged in');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="admin">
      {user ? (
        <div>
          <AdminDash logout={logoutUser}
          />
        </div>
      ) : (
        <div className="admin-wrapper">
         
          <div>
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="admin-log-head">Admin Login</h1>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <input type="submit" value="Login" />
            </form>
            
          </div>
          <div className="admin-wrap-photo">
            <img src="admin-login.jpg" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
