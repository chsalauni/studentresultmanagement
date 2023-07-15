import React, { useState } from 'react'
import{useNavigate} from 'react-router-dom'
import StudentService from '../services/StudentService'

const AddStudentComponent = () => {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [dob, setdob] = useState('')
    const [isValidAge, setIsValidAge] = useState(true);
    const [email, setemail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();
    const saveStudent = (e) => {
        e.preventDefault();
        if (isValidEmail && isValidAge) {
        const student={firstname,lastname,dob,email}
        StudentService.createStudent(student).then((response)=>{
            console.log(response.data)
            setNotification('Student is successfully added!');
            navigate('/addstudent');
            setfirstname('');
            setlastname('');
            setdob('');
            setemail('');
        }).catch(error=>{
            console.log(error);
        })
    }}
    //Email Validation
    const handleChangeEmail = (event) => {
      const value = event.target.value;
      setemail(value);
      validateEmail(value);
    };
    const validateEmail = (value) => {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      setIsValidEmail(emailRegex.test(value));
    };
    //Age validation
    const handleChangeAge = (event) => {
      const value = event.target.value;
      setdob(value);
      validateAge(value);
    };
    const validateAge = (value) => {
      const enteredDate = new Date(value);
      const currentDate = new Date();
      const ageDiff = currentDate - enteredDate;
      const ageInYears = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365));
      setIsValidAge(ageInYears >= 10);
    };
  return (
    <div>
      {notification && <div>{notification}</div>}
        <h2 className='text-center header_title'>Add Student</h2>
        <div className='container'>
        <div className='row'>
        <div className='col-md-6 offset-md-3 offset-md-3'>
            <form>
  <div className="form-floating mb-3 mt-3">
     <input type="text" class="form-control" placeholder="Enter First Name" name="firstname" required value={firstname} onChange={(e)=>setfirstname(e.target.value)}>
    </input>
    <label for="firstname" class="form-label">First Name:</label>
  </div>
  <div className="form-floating mb-3 mt-3">
      <input type="text" class="form-control" placeholder="Enter Family Name" name="lastname" required value={lastname} onChange={(e)=>setlastname(e.target.value)}></input>
      <label for="familyname" class="form-label">Family Name:</label>
  </div>
  <div className="form-floating mb-3 mt-3">
    <input type="date" class="form-control" placeholder="Enter Date of Birth" name="dob"  required value={dob} onChange={handleChangeAge}></input>
    {!isValidAge && <span className="error">The student should be at least 10 years old.</span>}
    <label for="dob" class="form-label">Date of Birth:</label>
  </div>
  <div className="form-floating mb-3 mt-3">
    <input type="email" class="form-control" placeholder="Enter email" name="email" required  pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" value={email} onChange={handleChangeEmail}></input>
    {!isValidEmail && <span className="error">Please enter a valid email address.</span>}
    <label for="email" class="form-label">Email:</label>
  </div>
  <button className='btn btn-success' onClick={(e)=>saveStudent(e)}>Add Student</button>
            </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default AddStudentComponent