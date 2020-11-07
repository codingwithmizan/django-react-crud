import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Home = () =>{
    const [employes, setEmployee] =useState([])
    useEffect(()=>{
        loadEmployees();
    },[])

    const loadEmployees = async() =>{
        const result = await axios.get('http://127.0.0.1:8000/api/employees/')
        setEmployee(result.data)
    }

    const deleteEmployee = async(id)=>{
        await axios.delete(`http://127.0.0.1:8000/api/employees/${id}`)
        loadEmployees()
    }
    return(
        <div className='container'>
            <h1 className='mt-5 text-center text-success'>Employee List</h1>
            <table className='table table-striped'>
                <thead className='thead-dark text-center'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    employes.map((employee, index)=>(
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.city}</td>
                            <td>{employee.salary}</td>
                            <td>
                                <Link className='btn btn-primary mr-2' to={`/employees/${employee.id}`}>View</Link>
                                <Link className='btn btn-outline-primary mr-2' to={`/employees/edit/${employee.id}`}>Edit</Link>
                                <Link className='btn btn-danger' onClick={()=>deleteEmployee(employee.id)}>Delete</Link>
                            </td>
                        </tr>
                    )
                        
                    )
                }
                </tbody>
                
               
            </table>
        </div>
    )
}

export default Home