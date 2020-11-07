import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const AddEmp = () => {
    let history = useHistory()
    const[employee, setEmployee] = useState({
        name:'',
        gender:'',
        email:'',
        phone:'',
        city:'',
        salary:''
    })
    const onInputChange = (e) =>{
        setEmployee({
          ...employee,[e.target.name]:e.target.value
        })
    }

    const onSubmits =  e =>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/employees/', employee);
        console.log(employee)
        history.push('/')
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mx-auto shadow p-5'>
                    <h2 className='pb-3'>Add Employee</h2>
                    <form onSubmit={e => onSubmits(e)}>
                        <div className='form-group'>
                            <input type='text' 
                                className='form-control' 
                                name='name' 
                                value={employee.name} 
                                onChange ={e =>onInputChange(e) }
                                placeholder='Enter your name'/>
                        </div>
                        <div className='form-group'>
                            <input type='text' 
                                className='form-control' 
                                name='gender' 
                                value={employee.gender} 
                                onChange ={e =>onInputChange(e) }
                                placeholder='Gender'/>
                        </div>
                        <div className='form-group'>
                            <input type='email' 
                                className='form-control' 
                                name='email' 
                                value={employee.email} 
                                onChange ={e =>onInputChange(e) }
                                placeholder='Enter your email'/>
                        </div>
                        <div className='form-group'>
                            <input type='text' 
                                className='form-control' 
                                name='phone' 
                                value={employee.phone} 
                                onChange ={e =>onInputChange(e) }
                                placeholder='Enter your phone'/>
                        </div>
                        <div className='form-group'>
                            <input type='text' 
                                className='form-control' 
                                name='city' 
                                value={employee.city} 
                                onChange ={e =>onInputChange(e) }
                                placeholder='Enter your city'/>
                        </div>
                        <div className='form-group'>
                            <input type='text' 
                                className='form-control' 
                                name='salary' 
                                value={employee.salary} 
                                onChange ={e =>onInputChange(e) }
                                placeholder='Enter Salary'/>
                        </div>
                        <button className='btn btn-primary' type='submit'>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddEmp
