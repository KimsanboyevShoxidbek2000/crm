import React, { useState, useEffect , useRef } from 'react';

import { Link } from 'react-router-dom';


import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { FiSearch } from 'react-icons/fi';

import '../../components/Admin/componentsStyle/CopStyle.css'
import { useGet } from '../../hooks/useGet'
import axios from 'axios';

const SubjectList = () => {
    const [search, setSearch] = useState(false)
    const [getSearch, setGetSearch] = useState('');
    // const [userId, setUserId] = useState(null)
    const autoFocus = useRef()
    const techerList = useGet('core/subject-list/')
     console.log(techerList);
    const editFun = async(id) => {
        const res = await axios.get(`https://testcrmapi1.herokuapp.com/accounts/teacher-edit/${id}`)
        const response = await res.data
        console.log(response);
    }


    const columns = [
        { id: '1', label: '#', minWidth: 40 },
        { id: 'firstname', label: 'Subject Name', minWidth: 150 },
       
        {
            id: 'action',
            label: 'Action',
            align: 'center',
            minWidth: 200
        },
    ];
    return (
        <>
            <div className='subject-list'>
                <Paper sx={{ width: '100%' }} style={{ borderRadius: '15px 15px 0 15px' }}>
                    <div className='subject-header'>
                        <div className="subject-header-left">
                            <div>
                                <h2 className='subject-staff'>
                                    Subject Details
                                </h2>
                            </div>
                            <div>
                                <Link to='/subjectCreate' className='nav-item'><span>Add Subjects</span><i></i></Link>
                                {/* <Link to='/teachersList' className='nav-item' ><span>Pendding Students</span><i></i></Link> */}
                                {/* <Link to='/teachersList' className='nav-item'><span>Active Students</span><i></i></Link> */}
                            </div>
                        </div>
                        <div className="subject-header-right">
                            <div className={`${search ? 'active' : ''}  search`}>
                                <input ref={autoFocus} value={getSearch} onChange={(e) => setGetSearch(e.target.value)} type="text" className={`input`} placeholder="Search..." />
                                <button className="btn" onClick={() => {
                                    setSearch(!search)
                                    autoFocus.current.focus()
                                }}>
                                    <FiSearch className='search_icon' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <TableContainer sx={{ maxHeight: "calc(86vh - 160px)", minHeight: 'calc(86vh - 160px)' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {
                                        columns.map((column) => (
                                            <TableCell style={{ fontWeight: 'bold', minWidth: column.minWidth }} key={column.id} align={column.align}>
                                                {column.label}
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {techerList.filter(data => data.name.toLowerCase().includes(getSearch.toLowerCase()))
                                    .map((data , index) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={data.id}>
                                                <TableCell>
                                                  {
                                                   index +1
                                                  }
                                                </TableCell>
                                                <TableCell>
                                                    {data.name}
                                                </TableCell>
                                               
                                                <TableCell align='center'>
                                                    <Button style={{ margin: '2px 5px' }} variant="outlined" startIcon={<EditIcon />} onClick={() => {                                          
                                                        editFun(data.id)
                                                    }} >
                                                        Edit
                                                    </Button >
                                                    <Button style={{ margin: '2px 5px' }} color='error' variant="outlined" startIcon={<DeleteIcon />}>
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        </>
    )
}

export default SubjectList;
