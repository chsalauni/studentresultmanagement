import axios from 'axios';
const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/student';
const COURSE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/course';
const RESULT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/result';

class ResultService {
  getAllStudents() {
    return axios.get(STUDENT_BASE_REST_API_URL);
  }

  getAllCourse() {
    return axios.get(COURSE_BASE_REST_API_URL);
  }
  
  createResult(result) {
    return axios.post(RESULT_BASE_REST_API_URL, result);
  }

  getResultById(resultId) {
    return axios.get(RESULT_BASE_REST_API_URL + '/' + resultId);
  }

  deleteResult(resultId) {
    return axios.delete(RESULT_BASE_REST_API_URL + '/' + resultId);
  }

  getAllResult() {
    return axios.get(RESULT_BASE_REST_API_URL);
  }
}

export default new ResultService();
