import {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios'

const EditEmployee = () => {
    const history = useHistory()
    const {id} = useParams()
    const[employee, setEmployee] = useState({
        name:'',
        gender:'',
        email:'',
        phone:'',
        city:'',
        salary:''
    })

    useEffect(()=>{
        loadEmployee()
    },[])


    console.log(employee)
    const onInputChange = (e) =>{
        setEmployee({
          ...employee,  [e.target.name]:e.target.value
        })
    }
    const loadEmployee = async () =>{
        const result = await axios.get(`http://127.0.0.1:8000/api/employees/${id}`)
        setEmployee(result.data)
    }
    const onSubmit = async e =>{
        e.preventDefault()
        await axios.put(`http://127.0.0.1:8000/api/employees/${id}`, employee);
        history.push('/')
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mx-auto shadow p-5'>
                    <h2 className='pb-3 text-center'>Update Employee</h2>
                    <form onSubmit={e => onSubmit(e)}>
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
                        <button className='btn btn-primary' type='submit'>Update Employee</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default EditEmployee
