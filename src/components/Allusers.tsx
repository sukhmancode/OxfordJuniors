import React from 'react'
import { CiPhone } from "react-icons/ci";
interface User {
    id:string
    GuardianName: string;
    GuardianEmail: string;
    ChildName: string;
    ChildAge: number;
    Phone: string;
  }
interface UserProps{
    userRows:User[]
}

const Allusers:React.FC<UserProps> = ({userRows}) => {
  return (
    <div>
    <table>
        <thead>
          <tr>
            <th>Guardian Name</th>
            <th>Guardian Email</th>
            <th>Child Name</th>
            <th>Child Age</th>
            <th>Phone</th>
            <th>Call Now</th>
          </tr>
        </thead>
        <tbody>
          {userRows.map((user) => (
            <tr key={user.id}>
              <td>{user.GuardianName}</td>
              <td>{user.GuardianEmail}</td>
              <td>{user.ChildName}</td>
              <td>{user.ChildAge}</td>
              <td>{user.Phone}</td>
            <td >  <a href={`tel:${user.Phone}`}><CiPhone size={30} fill='tomato' className='admin-call-icon'/></a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Allusers