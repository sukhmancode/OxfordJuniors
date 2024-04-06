import React from 'react'
import Sidebar from './sidebar'

const Allusers:React.FC = () => {
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
        <tr>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>Emily Doe</td>
            <td>8</td>
            <td>123-456-7890</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>janesmith@example.com</td>
            <td>Michael Smith</td>
            <td>5</td>
            <td>987-654-3210</td>
        </tr>
    </tbody>
</table>
    </div>
  )
}

export default Allusers