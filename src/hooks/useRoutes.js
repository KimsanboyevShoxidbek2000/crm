import * as React from "react";
import { useRoutes } from "react-router-dom";
import { useSelector } from 'react-redux';

//  pages
import Login from '../components/login/Login'
import HomeAdmin from '../components/Admin/HomeAdmin';
import TeachersList from '../components/Admin/TeachersList';
import StudentsList from '../components/Admin/StudentsList';
import GroupsList from '../components/Admin/GroupsList';
import ReceptionIndex from '../components/Reception/RecetionIndex';
import Accountant from '../components/accountant/Accountant';
import TeacherIndex from '../components/Teachers/TeachersIndex';
import StudentIndex from '../components/Students/StudentIndex';


export const useRoutesa = () => {
    const auth = useSelector(state => state);
    const { superuser, student, accountant, teacher, reception } = auth.auth
    let data = JSON.parse(localStorage.getItem('data'))
    const { is_accountant, is_reception, is_student, is_superuser, is_teacher } = data


    const admin_user = useRoutes([
        {path: 'superuser' , element:<HomeAdmin/>},
        {path: 'teachersList' , element:<TeachersList/>},
        {path: 'studentsList' , element:<StudentsList/>},
        {path: 'GroupsList' , element:<GroupsList/>},

    ]);
    const reception_user = useRoutes([
        {path: 'receptionindex' , element:<ReceptionIndex/>},
    ]);
    const teacher_user = useRoutes([
        {path: '/' , element:<Login/>},
        {path: 'teacherindex' , element:<TeacherIndex/>},
    ]);
    const student_user = useRoutes([
      
        {path: 'studentindex' , element:<StudentIndex/>},
    ]);
    const accountant_user = useRoutes([
     
        {path: 'accountant' , element:<Accountant/>},
    ])

    if (superuser || is_superuser) {
       return  admin_user;
    }
    else if (reception || is_reception === true) {
       return reception_user 
    }
    else if (accountant || is_accountant === true) {
        return accountant_user
    }
    else if (teacher || is_teacher === true) {
        return teacher_user
    }
    else if (student || is_student === true) {
        return student_user
    }
    else {
        return (<> <Login/> </>)
    }
}
