import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import AddStudentComponent from './components/AddStudentComponent';
import AddCourseComponent from './components/AddCourseComponent';
import ListCourseComponent from './components/ListCourseComponent';
import AddResultComponent from './components/AddResultComponent';
import ListResultComponent from './components/ListResultComponent';
function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent/>
      <Routes>
      <Route path="/" />
        <Route path="/liststudent" element={<ListStudentComponent />} />
        <Route path="/addstudent" element={<AddStudentComponent />} />
        <Route path="/listcourse" element={<ListCourseComponent />} />
        <Route path="/addcourse" element={<AddCourseComponent />} />
        <Route path="/addresult" element={<AddResultComponent />} />
        <Route path="/listresult" element={<ListResultComponent />} />
      </Routes>
    </Router>
      </div>
  );
}

export default App;
