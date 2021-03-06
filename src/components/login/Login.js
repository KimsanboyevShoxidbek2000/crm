import React, { useState, } from 'react';

import Vectorimg from '../../assets/images/Vectors.png'

import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    CircularProgress,
} from '@mui/material';
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi';

import '../../Style/LoginStyle/LoginStyle.css';

import axios from "axios";
import { useDispatch } from 'react-redux'
import { teacher, superuser, student, reception, accountant } from '../../redux/auth';
import { useNavigate } from 'react-router-dom';
const url = process.env.REACT_APP_CRM_API
const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [eye, setEye] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userError, setUserError] = useState(false)
    const [passError, setPassError] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();

   




    const handleSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault();
        if (username.length > 0 && password.length > 0) {
            let data = {
                username: username,
                password: password
            }
            axios.post(`${url}accounts/login/`, data)
                .then(res => res.data)
                .then(token => {
                    localStorage.setItem('token', JSON.stringify(token.token))
                    const { is_superuser, is_student, is_teacher, is_reception, is_accountant, user_id } = token
                    localStorage.setItem('data', JSON.stringify({
                        is_superuser, is_student, is_teacher, is_reception, is_accountant, user_id
                    }))

                    if (is_superuser) {
                        dispatch(superuser(true))
                        navigate('/')
                    }
                    if (is_student) {
                        dispatch(student(true))
                        navigate('/studentindex')
                    }
                    if (is_accountant) {
                        dispatch(accountant(true))
                        navigate('/')
                    }
                    if (is_reception) {
                        dispatch(reception(true))
                        navigate('/receptionindex')
                    }
                    if (is_teacher) {
                        dispatch(teacher(true))
                        navigate('/')
                    }
                    setIsLoading(false)

                })
                .catch(err => {
                    console.log(err)
                    setIsLoading(false)
                })
            setUsername('');
            setPassword('');
            setPassError(false)
            setUserError(false)
        } else {
            setPassError(true)
            setUserError(true)
            setIsLoading(false)
        }
    }
    return (
        <div className='lot'>
            <div className='big-login'>

                <div className="container login">
                    <div className="row">
                        <div className="col-12 login-header">
                            <h2>
                                Assalomu Alaykum
                            </h2>
                            <h3>
                                Xush kelibsiz
                            </h3>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 login-card">
                            <form onSubmit={handleSubmit}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor='outlined-adornment-username' style={{ color: 'white' }}>Username</InputLabel>
                                    <OutlinedInput
                                        id='outlined-adornment-username'
                                        type='text'
                                        value={username}
                                        name='username'
                                        onChange={(e) => setUsername(e.target.value)}
                                        label="Username"
                                        style={{ color: 'white', backgroundColor: "#224957" }}
                                    />
                                    {
                                        userError ? (<span style={{ color: 'red', marginTop: '0.5vh', letterSpacing: '1.5px' }}>Username kiriting!</span>) : (<></>)
                                    }
                                </FormControl>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password" style={{ color: 'white' }}>Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={eye ? 'text' : 'password'}
                                        value={password}
                                        name='password'
                                        style={{ color: 'white', backgroundColor: "#224957" }}
                                        onChange={(e) => setPassword(e.target.value)}
                                        endAdornment={<InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setEye(!eye)}
                                                edge="end"
                                                style={{ color: 'white' }}
                                            >
                                                {eye ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                                            </IconButton>
                                        </InputAdornment>}
                                        label="Password"
                                    />
                                    {
                                        passError ? (<span style={{ color: 'red', marginTop: '0.5vh', letterSpacing: '1.5px' }}>Password kiriting!</span>) : (<></>)
                                    }
                                </FormControl>
                                <button style={{ color: 'white', border: '1px solid #20DF7F' }} type='submit' className='btn-login' disabled={isLoading ? true : false}>
                                    {
                                        isLoading ? <CircularProgress className='loader' style={{ color: 'white' }} /> : 'SIGN IN'
                                    }
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="vectors">
                <img src={Vectorimg} alt="" />
            </div>
        </div>)

}

export default Login
