import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from '../firebase/firebase';
import toast from 'react-hot-toast';
import AdminDash from './AdminDash';

const Admin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [logoutTimer, setLogoutTimer] = useState<NodeJS.Timeout | null>(null); // State to store logout timer

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    // Clean up timer on component unmount
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
        toast.success('Automatically logged out due to inactivity');
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
          setLogoutTimer(setTimeout(logoutUser, 15 * 60 * 10000)); // Set logout timer on login
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
          <AdminDash />
        </div>
      ) : (
        <div className="admin-wrapper">
          <div className="admin-wrap-photo">
            <img src="admin-login.jpg" alt="" />
          </div>
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
        </div>
      )}
    </div>
  );
};

export default Admin;
