import React, { useState, useEffect } from 'react';
import supabase from '../config/supaClient';

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
        <h1>Admin Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" /> {/* Changed button type to submit */}
      </form>

      <div className="data">
        <table className="table-fetch">
          <thead>
            <tr>
              <th>Guardian Name</th>
              <th>Guardian Email</th>
              <th>Child Name</th>
              <th>Child Age</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {fetchError && <tr><td colSpan={5}>{fetchError}</td></tr>}
            {records.map((rec, index) => (
              <tr key={index}>
                <td>{rec.Guardian_Name}</td>
                <td>{rec.Guardian_email}</td>
                <td>{rec.Child_name}</td>
                <td>{rec.Child_age}</td>
                <td>{rec.Phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
