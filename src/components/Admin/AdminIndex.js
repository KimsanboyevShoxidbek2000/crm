import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../AppStyle/AppStyle.css";

import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';

const AdminIndex = () => {
  const [menu, setMenu] = useState(false);
 

  return (
    <>
      <div className="app">
        <div className={`${menu ? "active" : ""} app-left`} onMouseEnter={() => {
          if (menu) {
            setMenu(!menu)
          } else {
            setMenu(menu)
          }
        }} onMouseLeave={() => { setMenu(!menu) }}>
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
                  <Link to='/teachersList'>Teachers List</Link>
                </li>
                <li>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                  <Link to='/dsds'>Teachers</Link>
                </li>
                <li>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                  <Link to='/zxczc'>Teachers</Link>
                </li>
                <li>
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
                </li>
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
            <li className="log-out">
              Log Out
              <FiLogOut />
            </li>
          </nav>
        </div>
      </div>
    </>
  );
};
export default AdminIndex;
