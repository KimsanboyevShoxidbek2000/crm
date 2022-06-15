import React from 'react'
import Login from './components/login/Login';
import AdminIndex from './components/Admin/AdminIndex';
import RecetionIndex from './components/Reception/RecetionIndex';
import TeachersIndex from './components/Teachers/TeachersIndex';
import {Routes, Route} from 'react-router-dom'
import './Style/LoginStyle/LoginStyle.css'
import StudentIndex from "./components/Students/StudentIndex";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/superuser' element={<AdminIndex/>}/>
                <Route path='/teacher' element={<TeachersIndex/>}/>
                <Route path='/reception' element={<RecetionIndex/>}/>
                <Route path='/studnet' element={<StudentIndex/>}/>

            </Routes>
        </div>

    )
}

export default App;
