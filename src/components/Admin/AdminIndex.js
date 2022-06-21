import React, { useState } from "react";

import "../AppStyle/AppStyle.css";

import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux';
import {profileoutside} from "../../redux/auth";
//  pages
import Login from '../login/Login';
import StudentIndex from '../Students/StudentIndex';
import TeacherIndex from "../Teachers/TeachersIndex";
import ReceptionIndex from '../Reception/RecetionIndex';
import Accountant from '../accountant/Accountant'
import TeachersList from "./TeachersList";
import StudentsList from "./StudentsList";
import GroupsList from "./GroupsList";
import HomeAdmin from "./HomeAdmin";

const AdminIndex = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const auth = useSelector(state => state);
    const { superuser, student, accountant, teacher, reception} = auth.auth
    let data = JSON.parse(localStorage.getItem('data'))
    const { is_accountant, is_reception, is_student, is_superuser, is_teacher } = data


    // const token = JSON.parse(localStorage.getItem('token'))
    const [menu, setMenu] = useState(false);
    // const getData = useGet('accounts/teacher-list/')

    // console.log(getData);
    // fetch('https://testcrmapi1.herokuapp.com/accounts/teacher-list/')
    //     .then(res => res.json())
    //     .then(data => console.log(data))


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
                                            navigate('/');
                                            dispatch(profileoutside())
                                        }}>
                                            Log Out
                                            <FiLogOut />
                                        </li>
                                    </nav>
                                </>
                            )

                            : (<></>)
                    }
                    <div className="app-right-container">
                        <Routes>
                            <Route path="homeadmin" element={<HomeAdmin/>}/>
                            <Route path="/" element={<Login />} />
                            <Route path="accountantindex" element={<Accountant />} />
                            <Route path="teacherindex" element={<TeacherIndex />} />
                            <Route path="studentindex" element={<StudentIndex />} />
                            <Route path="receptionindex" element={<ReceptionIndex />} />
                            <Route path="teachersList" element={<TeachersList />} />
                            <Route path='studentsList' element={<StudentsList />} />
                            <Route path='groupsList' element={<GroupsList />} />
                        </Routes>
                    </div>
                </div>
            </div>

        </>
    );
};
export default AdminIndex;
