import React, { useState } from "react";

import "../AppStyle/AppStyle.css";

import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { Link, Routes, useNavigate, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { profileoutside } from "../../redux/auth";

import HomeAdmin from "./HomeAdmin";
import Accountant from "../accountant/Accountant";
import TeachersIndex from "../Teachers/TeachersIndex";
import RecetionIndex from "../Reception/RecetionIndex";
import Login from "../login/Login";
import StudentList from "./StudentsList";
import TeachersList from "./TeachersList";
import GroupsList from "./GroupsList";

const AdminIndex = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const auth = useSelector(state => state);
    const { superuser, student, accountant, teacher, reception } = auth.auth
    let data = JSON.parse(localStorage.getItem('data'))
    const { is_accountant, is_reception, is_student, is_superuser, is_teacher } = data


    // const token = JSON.parse(localStorage.getItem('token'))
    const [menu, setMenu] = useState(false);
    // const getData = useGet('accounts/teacher-list/')

    // console.log(getData);
    // useEffect(() => {
    //     async function get_fun() {
    //         axios.get('https://testcrmapi1.herokuapp.com/accounts/teacher-list/')
    //             .then(res => res.data)
    //             .then(data => console.log(data));
    //     }
    //     get_fun()
    // }, [])


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
                        {/* superuser routes */}
                        {
                            (superuser || is_superuser)
                                ? (
                                    <>
                                        <Routes>
                                            <Route path='superuser' element={<HomeAdmin />} />
                                            <Route path='studentsList' element={<StudentList/>} />
                                            <Route path='teachersList' element={<TeachersList />} />
                                            <Route path='GroupsList' element={<GroupsList />} />
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
                                            <Route path='receptionindex' element={<RecetionIndex/>} />
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
                          :(
                            <>
                               <Routes>
                                <Route path="/" element={<Login/>}/>
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
