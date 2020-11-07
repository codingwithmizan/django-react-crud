import {useState, useEffect} from 'react'
import {useHistory, useParams, Link} from 'react-router-dom'
import axios from 'axios'
   
const ViewEmployee = () => {
    const history = useHistory()
    const {id} = useParams()
    const[employee, setEmployee] = useState({
        // name:'',
        // gender:'',
        // email:'',
        // phone:'',
        // city:'',
        // salary:''
    })
    useEffect(()=>{
        loadEmployee()
    },[])
    const loadEmployee = async () =>{
        const result = await axios.get(`http://127.0.0.1:8000/api/employees/${id}`)
        setEmployee(result.data)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mx-auto shadow p-5'>
                    <h2>Employee Details</h2>
                    <ul className='list-group mb-3'>
                            <li className='list-group-item'>ID: {employee.id} </li >
                            <li className='list-group-item'>Name: {employee.name} </li >
                            <li className='list-group-item'>Gender: {employee.gender} </li >
                            <li className='list-group-item'>Email: {employee.email} </li >
                            <li className='list-group-item'>Phone: {employee.phone} </li >
                            <li className='list-group-item'>City: {employee.city} </li >
                            <li className='list-group-item'>Salary: {employee.salary} </li >
                    </ul>
                    <Link to='/' className='btn btn-primary'>Back to home</Link>
                </div>
            </div>
            

            </div>
            
    )
}

export default ViewEmployee
