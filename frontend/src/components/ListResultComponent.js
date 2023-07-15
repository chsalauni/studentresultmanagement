import React, { useState, useEffect } from 'react'
import ResultService from '../services/ResultService'

const ListResultComponent = () => {
    const [result, setResult] = useState([])
    useEffect(() => {
      getAllResult();
    }, [])
    const getAllResult = () => {
        ResultService.getAllResult().then((response)=>{
            setResult(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteResult = (result_id)=>{
        ResultService.deleteResult(result_id).then((response)=>{
            getAllResult();
        }).catch(error=>{
            console.log(error);
        })
    }

  return (
    <div className="container">
        <h2 className='text-center header_title'>Result List</h2>
        <table className='table table-bordered table-stripped'>
            <thead>
            <th className='text-center'>Student Id</th>
                <th className='text-center'>Student Name</th>
                <th className='text-center'>Course Name</th>
                <th className='text-center'>Score</th>
                <th className='text-center'>Action</th>
            </thead>
            <tbody>
                {
                    result.map(
                        result =>
                        <tr key = {result.result_id}>
                            <td className='text-center'>{result.student.student_Id}</td>
                            <td className='text-center'>{result.firstname}</td>
                            <td className='text-center'>{result.course_name}</td>
                            <td className='text-center'>{result.score}</td>
                            <td className='text-center'><button className='btn btn-danger' onClick={()=>deleteResult(result.result_id)}>Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
export default ListResultComponent