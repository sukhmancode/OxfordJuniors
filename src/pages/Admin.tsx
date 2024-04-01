import React, { useState, useEffect } from 'react';
import supabase from '../config/supaClient';
import axios from 'axios';

const Admin: React.FC = () => {
  interface Record {
    Guardian_Name: string;
    Guardian_email: string;
    Child_name: string;
    Child_age: number;
    Phone: number;
  }

  const [fetchError, setFetchError] = useState('');
  const [records, setRecords] = useState<Record[]>([]);
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  useEffect(() => {
    const fetchRecords = async () => {
      const { data, error } = await supabase.from('orders').select();

      if (error) {
        setFetchError('Could not fetch records');
        console.log(error);
      }
      if (data) {
        setRecords(data);
        setFetchError('');
      }
    };
    fetchRecords();
  }, []);



  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Form submitted'); // Add logging for debugging
    // Additional form submission logic if needed
  };

  return (
    <div className="admin">
      <img src="admin.avif" alt="" />
      <form className="form" onSubmit={submitForm}>
        <h1 className='admin-log-head'>Admin Login</h1>
        <input type="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <input type="submit" value="Login" /> {/* Changed button type to submit */}
      </form>

      <div className="data">
     
      </div>
    </div>
  );
};

export default Admin;
