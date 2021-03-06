import React, { useState, useEffect } from 'react';
import '../Admin/componentsStyle/CopStyle.css'
// import usePost from '../../hooks/usePost';
import { Button } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import { useGet } from '../../hooks/useGet';
import axios from 'axios';
// import {usePut} from '../../hooks/usePut';

const url = process.env.REACT_APP_CRM_API

const TeacherCreate = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [percent, setPercent] = useState('')
    const [subject, setSubject] = useState('')
    const [userImg, setUserImg] = useState('');
    const [faceImg, setFaceImg] = useState('')


    const getSubject = useGet('core/subject-list/');


    const changeHandler = (e) => {
     
        setUserImg(e.target.files[0])

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (lastName.length > 0 && firstName.length > 0) {
            let formData = new FormData()
            formData.append('img' , userImg)
            let data = {
                first_name: firstName,
                last_name: lastName,
                phone: phone,
                address: address,
                percent: parseInt(percent),
                subject: parseInt(subject),
                image: formData
            }

           
            axios.post(`${url}accounts/teacher-create/`, data)
                .then(res => res.data)
                .then(data => console.log(data))
                console.log({
                    first_name: firstName,
                    last_name: lastName,
                    phone: phone,
                    address: address,
                    percent: parseInt(percent),
                    subject: parseInt(subject),
                    image: formData
                });
        }

      

        setFirstName('')
        setLastName('')
        setPhone('')
        setAddress('')
        setPercent('')
        setUserImg('')

    }

    return (
        <>
            <div style={{ padding: '0 1%' }}>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 text-center mb-3 mt-1">
                            <label
                                style={{
                                    position: "relative",
                                    width: '100%',
                                    height: '60px',
                                    display: 'block',
                                    textAlign: 'center'

                                }}
                                htmlFor="user-img" className='userImg'>
                                <input accept='.png, .jpg, .jpeg' style={{ opacity: 0 }} type="file" id='user-img' onChange={changeHandler} />
                                <img style={{
                                    position: 'absolute',
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '50%',
                                    left: 'calc(50% - 90px)',
                                    top: '10px',
                                    cursor: 'pointer',
                                }} src={`${userImg ? `${URL.createObjectURL(userImg)}` : `https://cdn-icons-png.flaticon.com/512/149/149071.png`}`} alt="error" />
                            </label>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 page_inputs">

                            <div className="form__group field">
                                <input
                                    type="text"
                                    className="form__field"
                                    placeholder="Firstname"
                                    id='firstName'
                                    value={firstName}
                                    name='firstName'
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <label htmlFor="firstName" className="form__label">Firstname</label>
                            </div>

                            <div className="form__group field">
                                <input
                                    type="text"
                                    className="form__field"
                                    placeholder="Lastname"
                                    id='lastName'
                                    value={lastName}
                                    name='lastName'
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <label htmlFor="lastName" className="form__label">Lastname</label>

                            </div>

                            <div className="form__group field">
                                <input
                                    type="number"
                                    className="form__field"
                                    placeholder="Phone"
                                    id='phone'
                                    value={phone}
                                    name='phone'
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <label htmlFor="phone" className="form__label">Phone</label>
                            </div>

                            <div className="form__group field">
                                <input
                                    type="text"
                                    className="form__field"
                                    placeholder="Address"
                                    id='address'
                                    value={address}
                                    name='address'
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <label htmlFor="address" className="form__label">Address</label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 page_inputs">
                            <div className="form__group field">
                                <input
                                    type="number"
                                    className="form__field"
                                    placeholder="Percent"
                                    id='percent'
                                    value={percent}
                                    name='percent'
                                    onChange={(e) => setPercent(e.target.value)}
                                />
                                <label htmlFor="percent" className="form__label">Percent</label>
                            </div>
                            <div className="form__group field">
                                <select
                                    type="text"
                                    className="form__field"
                                    placeholder="Subject"
                                    id='subject'
                                    value={subject}
                                    name='subject'
                                    onChange={(e) => setSubject(e.target.value)}
                                >
                                    {
                                        getSubject && getSubject.map(subject => {
                                            return (
                                                <option key={subject.id} value={`${subject.id}`}>{subject.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <label htmlFor="subject" className="form__label">subject</label>
                            </div>
                            <Button style={{ float: 'right', marginTop: '10px' }} type='submit' variant="outlined" startIcon={<GroupAddIcon />} >
                                Add
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default TeacherCreate;










