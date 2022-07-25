import React, { useState } from 'react'
import { Button, } from '@mui/material'
// import GroupAddIcon from '@mui/icons-material'
import axios from 'axios';
const url = process.env.REACT_APP_CRM_API
const SubjectCreate = () => {

    const [lesName, setLesName] = useState('')
 

    const PostSubject = '/core/subject-create/'






 
    


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(lesName);
        let formData = {
            name: lesName
        }
        axios.post(`${url}core/subject-create/`, formData)
        setLesName('')
        // setTeacher('')
        // setPrice('')
        // setFrom_time('')
        // setLevel('')
        // setTo_time('')
    }


  return (
    <div>
         <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 page_inputs">

                            <div className="form__group field">
                                <input
                                    type="text"
                                    className="form__field"
                                    placeholder="Subject name"
                                    id='lesName'
                                    value={lesName}
                                    name='lesName'
                                    onChange={(e) => setLesName(e.target.value)}
                                />
                                <label htmlFor="lesName" className="form__label">Subject name</label>
                                <Button style={{float:'right' ,marginTop:'10px'}} type='submit' variant="outlined">
                                Add
                            </Button>
                            </div>

                            {/* <div className="form__group field">
                                <input
                                    type="text"
                                    className="form__field"
                                    placeholder="Teacher"
                                    id='teacher'
                                    value={teacher}
                                    name='teacher'
                                    onChange={(e) => setTeacher(e.target.value)}
                                />
                                <label htmlFor="teacher" className="form__label">Teacher</label>

                            </div> */}
{/* 
                            <div className="form__group field">
                                <input
                                    type="number"
                                    className="form__field"
                                    placeholder="Price"
                                    id='price'
                                    value={price}
                                    name='price'
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <label htmlFor="price" className="form__label">Price</label>
                            </div> */}

                            {/* <div className="form__group field">
                                <input
                                    type="text"
                                    className="form__field"
                                    placeholder="Level"
                                    id='level'
                                    value={level}
                                    name='level'
                                    onChange={(e) => setLevel(e.target.value)}
                                />
                                <label htmlFor="level" className="form__label">Level</label>
                            </div> */}
                        </div>
                        {/* <div className="col-lg-6 col-md-6 col-12 col-sm-12 page_inputs">
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
                        </div> */}
                    </div>
                </form>
            </div>
    </div>
  )
}

export default SubjectCreate