import React from 'react';
import Login from './components/login/Login';
import AdminIndex from './components/Admin/AdminIndex';
import RecetionIndex from './components/Reception/RecetionIndex';
import TeachersIndex from './components/Teachers/TeachersIndex';

import './Style/LoginStyle/LoginStyle.css';
import StudentIndex from "./components/Students/StudentIndex";
import Accountant from "./components/accountant/Accountant";

import { useSelector } from 'react-redux';

const App = () => {
    const data = useSelector(state => state.login);
    const {superuser , accountant , student, teacher, reception} = data
    
    if (superuser === true) {
        return (
            <>
                <AdminIndex />
            </>
        )
    }
    else if (accountant === true) {
        return (
            <>
                <Accountant />
            </>
        )
    }
    else if (teacher === true) {
        return (
            <><TeachersIndex /></>
        )
    }
    else if (reception === true) {
        return (<> <RecetionIndex /></>)
    }
    else if (student === true) {
        return (<> <StudentIndex /></>)
    }
    return (
        <>
            <Login />
        </>
    )

}

export default App;
