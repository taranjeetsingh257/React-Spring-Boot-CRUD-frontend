import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

export const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, emailId}

        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) => {
                navigate('/employees');
            })
            .catch(error => {
                console.log(error)
            })
        }
        else{
            EmployeeService.createEmployee(employee).then((response) => {
                // console.log(response.data)
    
                navigate('/employees');
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        })
        .catch(error => {
            console.log(error);
        })
    }, [id])
    
    const title = () => {
        if(id){
            return <h2 className="text-center" style={{"marginTop": "10px"}}>Update Employee</h2>
        }
        else{
            return <h2 className="text-center" style={{"marginTop": "10px"}}>Add Employee</h2>
        }
    }

    const submitOrUpdateButton = () => {
        if(id){
            return <button className="btn btn-primary" style={{"marginRight": "5px"}} onClick={(e) => saveOrUpdateEmployee(e)}>Update</button>
        }
        else{
            return <button className="btn btn-primary" style={{"marginRight": "5px"}} onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>

        }
    }

  return (
    <div style={{"margin": "100px"}}>
        <div className="container mt-5">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {title()}
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className= "form-label"> First Name :</label>
                                <input
                                    type = "text"
                                    placeholder = "Enter first name"
                                    name = "firstName"
                                    className = "form-control"
                                    value = {firstName}
                                    onChange = {(e) => setFirstName(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label"> Last Name :</label>
                                <input
                                    type = "text"
                                    placeholder = "Enter last name"
                                    name = "lastName"
                                    className = "form-control"
                                    value = {lastName}
                                    onChange = {(e) => setLastName(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label"> Email Id :</label>
                                <input
                                    type = "email"
                                    placeholder = "Enter email Id"
                                    name = "emailId"
                                    className = "form-control"
                                    value = {emailId}
                                    onChange = {(e) => setEmailId(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="container text-center">
                                {/* <button className="btn btn-primary" style={{"marginRight": "5px"}} onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button> */}
                                {
                                    submitOrUpdateButton()
                                }
                                <Link to="/employees" className="btn btn-danger" style={{"marginLeft": "5px"}}>Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
