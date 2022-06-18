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
    const auth = useSelector(state => state);
    const { superuser, student, accountant, teacher, reception } = auth.auth
    let data = JSON.parse(localStorage.getItem('data'))
    const { is_accountant, is_reception, is_student, is_superuser, is_teacher } = data
    if (is_superuser === true || superuser === true) {
        return (
            <>
                <AdminIndex />
            </>
        )
    }
    else if (is_accountant === true || accountant === true) {
        return (
            <>
                <Accountant />
            </>
        )
    }
    else if (is_teacher === true || teacher === true) {
        return (
            <><TeachersIndex /></>
        )
    }
    else if (is_reception === true || reception === true) {
        return (<> <RecetionIndex /></>)
    }
    else if (is_student === true || student === true) {
        return (<> <StudentIndex /></>)
    }
    return (
        <>
          <Login/>
        </>
    )

}
export default App;
