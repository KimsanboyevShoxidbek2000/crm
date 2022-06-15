import React, { useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginSlice from '../../features/LoginSlice';
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

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [eye, setEye] = useState(false);
    const [isLoading, setIsLoading] = useState(false);  
    const loginS = useSelector(LoginSlice)
    console.log(loginS);
    const { superuser, reception, student, accountant, teacher} = useSelector(LoginSlice)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault();
        if (username.length > 0 && password.length > 0) {
            axios.post('https://testcrmapi1.herokuapp.com/accounts/login/', { username, password })
                .then(res => res.data)
                .then(token => {
              
                    if (token.is_superuser === true && token.token.length > 0) {
                        dispatch(superuser)
                    }
                    else if (token.is_accountant === true && token.token.length > 0) {
                        dispatch(accountant)
                    }
                    else if (token.is_reception === true && token.token.length > 0) {
                        dispatch(reception)
                    }
                    else if (token.is_student === true && token.token.length > 0) {
                        dispatch(student)       
                    }
                    else if (token.is_teacher === true && token.token.length > 0) {
                        dispatch(teacher)
                    }
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setIsLoading(false)
                })
            setUsername('');
            setPassword('');
        } else {
            alert('username or password kiriting!')
        }
    }
    return (
        <div>
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
                                    <InputLabel htmlFor='outlined-adornment-username'>Username</InputLabel>
                                    <OutlinedInput
                                        id='outlined-adornment-username'
                                        type='text'
                                        value={username}
                                        name='username'
                                        onChange={(e) => setUsername(e.target.value)}
                                        label="Username"
                                    />
                                </FormControl>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={eye ? 'text' : 'password'}
                                        value={password}
                                        name='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                        endAdornment={<InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setEye(!eye)}
                                                edge="end"
                                            >
                                                {eye ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                                            </IconButton>
                                        </InputAdornment>}
                                        label="Password"
                                    />
                                </FormControl>
                                <button type='submit' className='btn-login' disabled={isLoading ? true : false}>
                                    {
                                        isLoading ? <CircularProgress className='loader' color="success" /> : 'SIGN IN'
                                    }
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Login
