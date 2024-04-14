import React from 'react';
import { Timestamp } from 'firebase/firestore';
interface Teacher {
  id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Mobile: number;
  DOB: Timestamp;
  City: string;
  Address: string;
  cvFileUrl: string;
}

interface TeacherProps {
  teacherRows: Teacher[];
}

const TeacherDetails: React.FC<TeacherProps> = ({ teacherRows }) => {
  return (
    <div className='teacherDetails'>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>D.O.B</th>
            <th>City</th>
            <th>Address</th>
            <th>View C.V</th>
          </tr>
        </thead>
        <tbody>
          {teacherRows.map((teacher) => {
            return (
              <tr key={teacher.id}>
                <td>{teacher.FirstName}</td>
                <td>{teacher.LastName}</td>
                <td>{teacher.Email}</td>
                <td>{teacher.Mobile}</td>
                <td>{teacher.DOB.toDate().toLocaleDateString()}</td>
                <td>{teacher.City}</td>
                <td>{teacher.Address}</td>
                <td>
                  <a href={teacher.cvFileUrl} target='_blank' rel='noopener noreferrer'>
                    view
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherDetails;
