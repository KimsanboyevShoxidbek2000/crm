import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "../AppStyle/AppStyle.css";

import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { BrowserRouter as Router } from "react-router-dom";

import TeachersList from "./TeachersList";
import StudentsList from "./StudentsList";
import GroupsList from "./GroupsList";



const AdminIndex = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Router>
        <div className="app">
          <div className={`${menu ? "active" : ""} app-left`} onMouseEnter={() => {
            if (menu) {
              setMenu(!menu)
            } else {
              setMenu(menu)
            }
          }} onMouseLeave={() => {setMenu(!menu) }}>
            <div className="Sadibar">
              <div className="Sadibar-header">
                <Link to={'/superuser'}>
                  <h2 className="brand-title">GeekZone</h2>
                </Link>
              </div>
              <div className="Sadibar-body">
                <ul>
                  <li>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <Link to='/teachersList'>Teachers</Link>
                  </li>
                  <li>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <Link to='/studentsList'>Student</Link>
                  </li>
                  <li>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <Link to='/GroupsList'>Group</Link>
                  </li>
                  {/* <li>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <Link to='/zxczx'>Teachers</Link>
                  </li>
                  <li>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <Link to='/zxcz'>Teachers</Link>
                  </li>
                  <li>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <Link to='/zxcxz'>Teachers</Link>
                  </li> */}
                </ul>
              </div>
              <div className="Saidbar-footer">
              </div>
            </div>
          </div>
          <div className={`${menu ? 'app-right-active' : ''} app-right`}>
            <nav className="navbar">
              <div className="brand">
                <button onClick={() => {
                  setMenu(!menu)
                }} className="menu-bars">
                  <RiBarChartHorizontalLine />
                </button>
                <h1>GeekZone</h1>
              </div>

              <form>
                <button type="submit">
                  <li className="log-out" onClick={() => {
                    localStorage.setItem("data", JSON.stringify(
                      {
                        is_superuser: false,
                        is_student: false,
                        is_teacher: false,
                        is_accountant: false,
                        is_reception: false
                      }
                    ))
                  }}>
                    Log Out
                    <FiLogOut />
                  </li>
                </button>
              </form>
            </nav>
            <div className="app-right-container">
              <Routes>
                <Route path="teachersList" element={<TeachersList/>} />
                <Route path='studentsList' element={<StudentsList/>}/>
                <Route path='groupsList' element={<GroupsList/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};
export default AdminIndex;
