import React from 'react'
import { Link } from 'react-router-dom';  
const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
                <div className='container-fluid'>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
      <li className='nav-item'>   
        <Link to="/" className='nav-link'>  Home </Link>
        </li>
        <li className='nav-item'>   
        <Link to="/liststudent" className='nav-link'>Students List</Link>
        </li>
        <li className='nav-item'>   
        <Link to="/addstudent" className='nav-link'>Add Students</Link>
        </li>
        <li className='nav-item'>   
        <Link to="/listcourse" className='nav-link'>Course List</Link>
        </li>
        <li className='nav-item'>   
        <Link to="/addcourse" className='nav-link'>Add Course</Link>
        </li>
        <li className='nav-item'>   
        <Link to="/listresult" className='nav-link'>Result List</Link>
        </li>
        <li className='nav-item'>   
        <Link to="/addresult" className='nav-link'>Add Result</Link>
        </li>
       </ul>
        </div>
    </div>

            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent