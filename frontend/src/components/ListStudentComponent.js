import React, { useState, useEffect } from 'react'
import StudentService from '../services/StudentService'
const ListStudentComponent = () => {
    const [student, setStudent] = useState([])
    useEffect(() => {
      getAllStudents();
    }, [])
    const getAllStudents = () => {
        StudentService.getAllStudents().then((response)=>{
            setStudent(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteStudent = (student_Id)=>{
        StudentService.deleteStudent(student_Id).then((response)=>{
            getAllStudents();
        }).catch(error=>{
            console.log(error);
        })
    }

  return (
    <div className="container">
        <h2 className='text-center header_title'>Student List</h2>
        <table className='table table-bordered table-stripped'>
            <thead>
                <th className='text-center'>Student Id</th>
                <th className='text-center'>First Name</th>
                <th className='text-center'>Family Name</th>
                <th className='text-center'>Date of Birth</th>
                <th className='text-center'>Email Address</th>
                <th className='text-center'>Action</th>
            </thead>
            <tbody>
                {
                    student.map(
                        student =>
                        <tr key = {student.student_Id}>
                            <td className='text-center'>{student.student_Id}</td>
                            <td className='text-center'>{student.firstname}</td>
                            <td className='text-center'>{student.lastname}</td>
                            <td className='text-center'>{student.dob}</td>
                            <td className='text-center'>{student.email}</td>
                            <td className='text-center'><button className='btn btn-danger' onClick={()=>deleteStudent(student.student_Id)}>Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListStudentComponent