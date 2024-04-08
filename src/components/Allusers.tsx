import React from 'react'
import {doc, deleteDoc} from 'firebase/firestore'
import { db } from '../firebase/firebase';
import toast from 'react-hot-toast';
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
const deleteUser = async(id:string)=>{
    const userDoc=doc(db,'admissionData',id);
    await deleteDoc(userDoc);
    toast.success('User has been deleted')
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
            <th>Edit data</th>
            <th>Delete data</th>
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
              <td >✏️</td>
              <td onClick={()=>deleteUser(user.id)}>🗑️</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Allusers