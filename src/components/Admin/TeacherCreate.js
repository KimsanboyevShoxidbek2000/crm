import React, { useState } from 'react';
import './componentsStyle/CopStyle.css'

import { Button } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const TeacherCreate = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [percent, setPercent] = useState('')
    const [subject, setSubject] = useState('')
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(firstName, lastName, phone, address ,subject , percent);


        setFirstName('')
        setLastName('')
        setPhone('')
        setAddress('')
        setPercent('')
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="row">
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
                                    <option value="Engilish tili">Engilish tili</option>
                                    <option value="Nemis tili">Nemis tili</option>
                                    <option value="Fransuz tili">Fransuz tili</option>
                                    <option value="JavaScript">JavaScript</option>
                                </select>
                                <label htmlFor="subject" className="form__label">subject</label>
                            </div>
                            <Button style={{float:'right' ,marginTop:'10px'}} type='Submit' variant="outlined" startIcon={<GroupAddIcon/>} >
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










