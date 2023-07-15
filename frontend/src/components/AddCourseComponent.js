import React, { useState } from 'react'
import{useNavigate} from 'react-router-dom'
import CourseService from '../services/CourseService'

const AddCourseComponent = () => {
    const [course_name, setcourse_name] = useState('')
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();
    const saveCourse = (e) => {
        e.preventDefault();
        const course={course_name}
        CourseService.createCourse(course).then((response)=>{
            console.log(response.data)
            setNotification('Course is successfully added!');
            navigate('/addcourse');
            setcourse_name('');
        }).catch(error=>{
            console.log(error);
        })
    }

  return (
    <div>
        {notification && <div>{notification}</div>}
        <h2 className='text-center header_title'>Add Course</h2>
        <div className='container'>
        <div className='row'>
        <div className='col-md-6 offset-md-3 offset-md-3'>
            <form>
  <div class="form-floating mb-3 mt-3">
     <input type="text" class="form-control" placeholder="Enter Course Name" name="course_name" required value={course_name} onChange={(e)=>setcourse_name(e.target.value)}>
    </input>
    <label for="coursename" class="form-label">Course Name:</label>
  </div>
  <button className='btn btn-success' onClick={(e)=>saveCourse(e)}>Add Course</button>
            </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default AddCourseComponent