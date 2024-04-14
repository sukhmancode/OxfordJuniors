import React from 'react'
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
          </tr>
        </thead>
        <tbody>
          {userRows.map((user) => (
            <tr key={user.GuardianEmail}>
              <td>{user.GuardianName}</td>
              <td>{user.GuardianEmail}</td>
              <td>{user.ChildName}</td>
              <td>{user.ChildAge}</td>
              <td>{user.Phone}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Allusers