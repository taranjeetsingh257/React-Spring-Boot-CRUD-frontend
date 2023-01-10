import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

export const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
      getAllEmployees();
    }, [])
    
    const getAllEmployees = () => {
      EmployeeService.getAllEmployees().then((response) => {
        setEmployees(response.data)
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    }

    const deleteEmployee = (employeeId) => {
      // console.log(employeeId)
      EmployeeService.deleteEmployee(employeeId).then((response) => {
        getAllEmployees();
      })
      .catch(error => {
        console.log(error);
      })
    }

  return (
    <div className='container' style={{"marginTop": "10px"}}>
        <h2 className='text-center'>List Employees</h2>
        <Link to="/add-employee" className="btn btn-primary mb-3">Add Employee</Link>
        <div className="container text-center">
            <table className='table table-bordered table-stripped'>
                <thead>
                  <tr>
                    <th>Employee Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Id</th>
                    <th>Actions</th>
                  </tr>
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
                              <td>
                                <Link to={`/edit-employee/${employee.id}`} className="btn btn-primary" style={{"marginRight": "5px"}}>Update</Link>
                                <button className="btn btn-danger" style={{"marginLeft": "5px"}} onClick={() => deleteEmployee(employee.id)}>Delete</button>
                              </td>
                          </tr>
                      )
                    }
                </tbody>
            </table>
        </div>   
    </div>
  )
}
