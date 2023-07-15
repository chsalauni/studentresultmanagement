import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResultService from '../services/ResultService';

const AddResultComponent = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [score, setScore] = useState('');
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  const fetchStudents = () => {
    ResultService.getAllStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCourses = () => {
    ResultService.getAllCourse()
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'student_Id') {
      setSelectedStudent(value);
    } else if (name === 'course_id') {
      setSelectedCourse(value);
    } else if (name === 'score') {
      setScore(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedStudentObj = students.find((student) =>student.student_Id === parseInt(selectedStudent));
    const selectedCourseObj = courses.find((course) => course.course_id === parseInt(selectedCourse));
    const result = {
      student: selectedStudentObj,
      course: selectedCourseObj,
      score: score,
      firstname:  selectedStudentObj ? `${selectedStudentObj.firstname} ${selectedStudentObj.lastname}` : '',
      course_name: selectedCourseObj ? selectedCourseObj.course_name : ''
    };
    ResultService.createResult(result)
      .then((response) => {
        console.log(response.data);
        setNotification('Result is successfully added!');
        navigate('/addresult');
        setSelectedStudent('');
        setSelectedCourse('');
        setScore('');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
      <div>
      {notification && <div>{notification}</div>}
       <h2 className='text-center header_title'>Add Student</h2>
        <div className='container'>
        <div className='row'>
        <div className='col-md-6 offset-md-3 offset-md-3'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <select name="student_Id" value={selectedStudent} onChange={handleChange} required className='form-select' aria-label="Select Student">
            <option value="" disabled>Select Student</option>
            {students.map((student) => (
              <option key={student.student_Id} value={student.student_Id}>
                {student.firstname} {student.lastname}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3 mt-3">
          <select name="course_id" value={selectedCourse} onChange={handleChange} required className='form-select' aria-label="Select Course">
            <option value="" disabled>Select Course</option>
            {courses.map((course) => (
              <option key={course.course_id} value={course.course_id}>
                {course.course_name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3 mt-3">
          <select name="score" value={score} onChange={handleChange} required className='form-select' aria-label="Select Score"> 
            <option value="" disabled>Select Score</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
        </div>
        <button className='btn btn-success' type="submit">Add Result</button>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default AddResultComponent;
