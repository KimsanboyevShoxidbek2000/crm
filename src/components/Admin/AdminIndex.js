import React, { useState, useEffect } from "react";
import BrandImg from '../../assets/images/geekzone.png'
import "../AppStyle/AppStyle.css";


import { Link, Routes, useNavigate, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { profileoutside } from "../../redux/auth";
import { Button, Menu, MenuItem } from "@mui/material";
// import { useGet } from '../../hooks/useGet'


// icons
import { BsFillPersonFill } from 'react-icons/bs'
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi'

import { MdPersonalInjury, MdGroups } from 'react-icons/md'


// pages
import HomeAdmin from "./HomeAdmin";
import Accountant from "../accountant/Accountant";
import TeachersIndex from "../Teachers/TeachersIndex";
import RecetionIndex from "../Reception/RecetionIndex";
import Login from "../login/Login";
import StudentList from "../Students/StudentsList";
import TeachersList from "../Teachers/TeachersList";
import GroupsList from "../../core/GroupsList";
import TeacherCreate from "../Teachers/TeacherCreate";




const AdminIndex = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state => state);
    const { superuser, student, accountant, teacher, reception } = auth.auth;


    const [menu, setMenu] = useState(false);
    const [response, setResponse] = useState({
        is_superuser: false,
        is_student: false,
        is_teacher: false,
        is_accountant: false,
        is_reception: false
    })


    // logout function start
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const data = window.localStorage.getItem('data')
        if (data) {
            const {
                is_superuser,
                is_student,
                is_teacher,
                is_accountant,
                is_reception
            } = JSON.parse(data)
            setResponse(
                {
                    is_superuser,
                    is_student,
                    is_teacher,
                    is_accountant,
                    is_reception
                })
        }
        else {
            setResponse({
                is_superuser: false,
                is_student: false,
                is_teacher: false,
                is_accountant: false,
                is_reception: false
            }
            )
        }
    }, [])


    return (
        <>
            <div className="app">
                {
                    ((superuser || response.is_superuser) || (reception || response.is_reception) || (student || response.is_student) || (teacher || response.is_teacher) || (accountant || response.is_accountant))
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
                                            <Link to={'/'}>
                                                <h2 className="brand-title"> <img src={BrandImg} alt="Brand" /> </h2>
                                            </Link>
                                        </div>
                                        <div className="Sadibar-body">
                                            <ul>
                                                {/* superuser menu list */}
                                                {
                                                    (response.is_superuser || superuser)
                                                        ? (
                                                            <>
                                                                <li>
                                                                    <Link to='/teachersList'> <span><GiTeacher /></span>  <span className="none"> Teachers</span></Link>
                                                                </li>
                                                                <li>
                                                                    <Link to='/studentsList'><span><MdPersonalInjury /></span> <span className="none">Student</span></Link>
                                                                </li>
                                                                <li>
                                                                    <Link to='/GroupsList'><span ><MdGroups /></span> <span className="none">Group</span></Link>
                                                                </li>


                                                            </>
                                                        )
                                                        : (<></>)
                                                }
                                                {/* accountant menu list */}
                                                {
                                                    (response.is_accountant || accountant)
                                                        ? (
                                                            <>
                                                                <li>
                                                                    <Link to='/teachersList'>Teachers</Link>
                                                                </li>
                                                            </>
                                                        )
                                                        : (<></>)
                                                }
                                                {/* reception menu list */}
                                                {
                                                    (response.is_reception || reception)
                                                        ? (
                                                            <>
                                                                <li>
                                                                    <Link to={'/'}>Salom</Link>
                                                                </li>
                                                            </>
                                                        )
                                                        : (<></>)
                                                }
                                                {
                                                    (response.is_student || student)
                                                        ? (
                                                            <>

                                                            </>
                                                        )
                                                        : (<></>)
                                                }
                                                {
                                                    (response.is_teacher || teacher)
                                                        ? (
                                                            <>

                                                            </>
                                                        )
                                                        : (<></>)
                                                }
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
                        ((superuser || response.is_superuser) || (reception || response.is_reception) || (student || response.is_student) || (teacher || response.is_teacher) || (accountant || response.is_accountant))
                            ? { width: '100%' , paddingLeft: '1%' , paddingRight: '1%' , paddingTop: '1vh'}
                            : { width: '100%' }
                    }
                >
                    {
                        ((superuser || response.is_superuser) || (reception || response.is_reception) || (student || response.is_student) || (teacher || response.is_teacher) || (accountant || response.is_accountant))
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
                                                style={{
                                                    fontSize: '25px',
                                                    color: '#1C3156'
                                                }}
                                            >
                                                <BsFillPersonFill />
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
                            (superuser || response.is_superuser)
                                ? (
                                    <>
                                        <Routes>
                                            <Route path='/' element={<HomeAdmin />} />
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
                            (accountant || response.is_accountant)
                                ? (
                                    <>
                                        <Routes>
                                            <Route path='/' element={<Accountant />} />
                                        </Routes>
                                    </>
                                )
                                : (<></>)
                        }
                        {/* teacher routes */}
                        {
                            (teacher || response.is_teacher)
                                ? (
                                    <>
                                        <Routes>
                                            <Route path='/' element={<TeachersIndex />} />
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
                            (reception || response.is_reception)
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
                            ((superuser || response.is_superuser) || (reception || response.is_reception) || (student || response.is_student) || (teacher || response.is_teacher) || (accountant || response.is_accountant))
                                ? (<>

                                </>)
                                : (
                                    <>
                                        <Routes>
                                            <Route path="/" element={<Login />} />
                                        </Routes>
                                    </>
                                )
                        }
                    </div>

                    {
                        ((superuser || response.is_superuser) || (reception || response.is_reception) || (student || response.is_student) || (teacher || response.is_teacher) || (accountant || response.is_accountant))
                            ? (<>
                                <div className="footer">
                                    <h3>Copyright © 2022 GeekZone.  All rights reserved.</h3>
                                </div>
                            </>)
                            : (<></>)
                    }

                </div>
            </div>
        </>
    );
};
export default AdminIndex;
