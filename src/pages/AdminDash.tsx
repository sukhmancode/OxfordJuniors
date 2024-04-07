import React from 'react'
import Sidebar from '../components/sidebar'

interface AdminDashProps{
  logout : () =>void;

}
const AdminDash:React.FC<AdminDashProps> = ({logout}) => {
  return (
    <div className='admin-page'>
        <Sidebar logout={logout}/>
    </div>
  ) 
}

export default AdminDash