import React, { useState, useEffect } from 'react'
import CourseService from '../services/CourseService'

const ListCourseComponent = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
      getAllCourse();
    }, [])
    const getAllCourse = () => {
        CourseService.getAllCourse().then((response)=>{
            setCourse(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteCourse = (course_id)=>{
       CourseService.deleteCourse(course_id).then((response)=>{
            getAllCourse();
        }).catch(error=>{
            console.log(error);
        })
    }

  return (
    <div className="container">
        <h2 className='text-center header_title'>Course List</h2>
        <table className='table table-bordered table-stripped'>
            <thead>
                <th className='text-center'>Course Name</th>
                <th className='text-center'>Action</th>
            </thead>
            <tbody>
                {
                    course.map(
                        course =>
                        <tr key = {course.course_id}>
                            <td className='text-center'>{course.course_name}</td>
                            <td className='text-center'><button className='btn btn-danger' onClick={()=>deleteCourse(course.course_id)}>Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListCourseComponent