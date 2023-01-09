import React, { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'

export const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
      EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    }, [])
    

  return (
    <div className='container' style={{"marginTop": "10px"}}>
        <h2 className='text-center'>List Employees</h2>
        <div className="container text-center">
            <table className='table table-bordered table-stripped'>
                <thead>
                    <th>Employee Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Id</th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>   
    </div>
  )
}
