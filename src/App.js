import React from 'react';
import Login from './components/login/Login';
import AdminIndex from './components/Admin/AdminIndex';
import RecetionIndex from './components/Reception/RecetionIndex';
import TeachersIndex from './components/Teachers/TeachersIndex';

import './Style/LoginStyle/LoginStyle.css';
import StudentIndex from "./components/Students/StudentIndex";
import Accountant from "./components/accountant/Accountant";

import { Routes, Route } from 'react-router-dom'

const App = () => {

    // let data = JSON.parse(localStorage.getItem('data'))
    // const { is_accountant, is_reception, is_student, is_superuser, is_teacher } = data

    //     if (is_superuser === true) {
    //         return (
    //             <>
    //                 <Routes>
    //                     <Route path='/' element={<AdminIndex />} />
    //                 </Routes>
    //             </>
    //         )
    //     }
    //     else if (is_accountant === true) {
    //         return (
    //             <>
    //                 <Accountant />
    //             </>
    //         )
    //     }
    //     else if (is_teacher === true) {
    //         return (
    //             <><TeachersIndex /></>
    //         )
    //     }
    //     else if (is_reception === true) {
    //         return (<> <RecetionIndex /></>)
    //     }
    //     else if (is_student === true) {
    //         return (<> <StudentIndex /></>)
    //     }
 
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
        </>
    )

}

export default App;
