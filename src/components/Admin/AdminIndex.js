import React, { useState } from "react";

import "../AppStyle/AppStyle.css";

import { RiBarChartHorizontalLine } from 'react-icons/ri';

import { Link, Routes, useNavigate, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { profileoutside } from "../../redux/auth";
import { Button, Menu, MenuItem } from "@mui/material";
import { useGet } from '../../hooks/useGet'
// pages
import HomeAdmin from "./HomeAdmin";
import Accountant from "../accountant/Accountant";
import TeachersIndex from "../Teachers/TeachersIndex";
import RecetionIndex from "../Reception/RecetionIndex";
import Login from "../login/Login";
import StudentList from "./StudentsList";
import TeachersList from "./TeachersList";
import GroupsList from "./GroupsList";
import TeacherCreate from "./TeacherCreate";

const AdminIndex = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const auth = useSelector(state => state);
    const { superuser, student, accountant, teacher, reception } = auth.auth
    let data = JSON.parse(localStorage.getItem('data'))
    const { is_accountant, is_reception, is_student, is_superuser, is_teacher } = data
    const [menu, setMenu] = useState(false);
    const getData = useGet('posts')
    console.log(getData);
    // logout function start
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // logout function end

    return (
        <>

            <div className="app">
                {
                    ((superuser || is_superuser) || (reception || is_reception) || (student || is_student) || (teacher || is_teacher) || (accountant || is_accountant))
                        ? (
                            <>
                                <div className={`${menu ? "active" : ""} app-left`} onMouseEnter={() => {
                                    if (menu) {
                                        setMenu(!menu)
                                    } else {
                                        setMenu(menu)
                                    }
                                }} onMouseLeave={() => {
                                    setMenu(!menu)
                                }}>
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
                                                <li>
                                                    <i className="fa fa-bars" aria-hidden="true"></i>
                                                    <Link to='/teacherCreate'>Add Teacher</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="Saidbar-footer">
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                        : (<></>)
                }
                <div
                    className={`${menu ? 'app-right-active' : ''} app-right`}
                    style={
                        ((superuser || is_superuser) || (reception || is_reception) || (student || is_student) || (teacher || is_teacher) || (accountant || is_accountant))
                            ? { width: '100%' }
                            : { width: '100%' }
                    }
                >
                    {
                        ((superuser || is_superuser) || (reception || is_reception) || (student || is_student) || (teacher || is_teacher) || (accountant || is_accountant))
                            ?
                            (
                                <>
                                    <nav className="navbar">
                                        <div className="brand">
                                            <button onClick={() => {
                                                setMenu(!menu)
                                            }} className="menu-bars">
                                                <RiBarChartHorizontalLine />
                                            </button>
                                            <h1>GeekZone</h1>
                                        </div>
                                        <div>
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                                Dashboard
                                            </Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                                <MenuItem onClick={() => {
                                                    localStorage.setItem("data", JSON.stringify(
                                                        {
                                                            is_superuser: false,
                                                            is_student: false,
                                                            is_teacher: false,
                                                            is_accountant: false,
                                                            is_reception: false
                                                        }
                                                    ))
                                                    navigate('/');
                                                    dispatch(profileoutside())
                                                    handleClose()
                                                }}>Logout</MenuItem>
                                            </Menu>
                                        </div>
                                    </nav>
                                </>
                            )
                            : (<></>)
                    }
                    <div className="app-right-container">
                        {/* superuser routes */}
                        {
                            (superuser || is_superuser)
                                ? (
                                    <>
                                        <Routes>
                                            <Route path='superuser' element={<HomeAdmin />} />
                                            <Route path='studentsList' element={<StudentList />} />
                                            <Route path='teachersList' element={<TeachersList />} />
                                            <Route path='GroupsList' element={<GroupsList />} />
                                            <Route path='teacherCreate' element={<TeacherCreate />} />
                                        </Routes>
                                    </>
                                )
                                : (<></>)
                        }
                        {/* accountant routes */}
                        {
                            (accountant || is_accountant)
                                ? (
                                    <>
                                        <Routes>
                                            <Route path='accountant' element={<Accountant />} />
                                        </Routes>
                                    </>
                                )
                                : (<></>)
                        }
                        {/* teacher routes */}
                        {
                            (teacher || is_teacher)
                                ? (
                                    <>
                                        <Routes>
                                            <Route path='teacherindex' element={<TeachersIndex />} />
                                        </Routes>
                                    </>
                                )
                                : (
                                    <>
                                    </>
                                )
                        }
                        {/* reception routes */}
                        {
                            (reception || is_reception)
                                ? (
                                    <>
                                        <Routes>
                                            <Route path='receptionindex' element={<RecetionIndex />} />
                                        </Routes>
                                    </>
                                )
                                : (
                                    <></>
                                )
                        }
                        {/* error routes */}
                        {
                            ((superuser || is_superuser) || (reception || is_reception) || (student || is_student) || (teacher || is_teacher) || (accountant || is_accountant))
                                ? (<></>)
                                : (
                                    <>
                                        <Routes>
                                            <Route path="/" element={<Login />} />
                                        </Routes>
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
export default AdminIndex;
