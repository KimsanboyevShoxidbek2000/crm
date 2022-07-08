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

import '../Admin/componentsStyle/CopStyle.css'
import { useGet } from '../../hooks/useGet'

const TeachersList = () => {
    const [search, setSearch] = useState(false)
    const [getSearch, setGetSearch] = useState('');
    const [userId, setUserId] = useState(null)
    const autoFocus = useRef()
    const techerList = useGet('accounts/teacher-list/')

    
    const columns = [
        { id: '1', label: '#', minWidth: 40 },
        { id: 'firstname', label: 'Firstname', minWidth: 150 },
        {
            id: 'lastname',
            label: 'Lastname',
            align: 'left',
            minWidth: 150
        },
        {
            id: 'address',
            label: 'Address',
            align: 'left',
            minWidth: 150
        },
        {
            id: 'phone',
            label: 'Phone',
            align: 'left',
            minWidth: 150
        },
        {
            id: 'percent',
            label: 'Percent',
            align: "left",
            minWidth: 150
        },
        {
            id: 'salary',
            label: 'Salary',
            align: 'left',
            minWidth: 150

        },
        {
            id: 'action',
            label: 'Action',
            align: 'center',
            minWidth: 200
        },
    ];

    return (
        <>
            <div className='teacher-list'>
                <Paper sx={{ width: '100%' }} style={{ borderRadius: '15px 15px 0 15px' }}>
                    <div className='teacher-header'>
                        <div className="teacher-header-left">
                            <div>
                                <h2 className='teacher-staff'>
                                    Teacher Details
                                </h2>
                            </div>
                            <div>
                                <Link to='/teacherCreate' className='nav-item'><span>Add Teacher</span><i></i></Link>
                                {/* <Link to='/teachersList' className='nav-item' ><span>Pendding Students</span><i></i></Link> */}
                                {/* <Link to='/teachersList' className='nav-item'><span>Active Students</span><i></i></Link> */}
                            </div>
                        </div>
                        <div className="teacher-header-right">
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
                                {techerList.filter(data => data.first_name.toLowerCase().includes(getSearch.toLowerCase()))
                                    .map((data , index) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={data.id}>
                                                <TableCell>
                                                  {
                                                   index +1
                                                  }
                                                </TableCell>
                                                <TableCell>
                                                    {data.first_name}
                                                </TableCell>
                                                <TableCell>
                                                    {data.last_name}
                                                </TableCell>
                                                <TableCell>
                                                    {data.phone}
                                                </TableCell>
                                                <TableCell>
                                                    {data.address}
                                                </TableCell>
                                                <TableCell>
                                                    {data.percent}
                                                </TableCell>
                                                <TableCell>
                                                    {data.salary}
                                                </TableCell>
                                                <TableCell align='center'>
                                                    <Button style={{ margin: '2px 5px' }} variant="outlined" startIcon={<EditIcon />} onClick={() => {
                                                        setUserId(data.id)
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

export default TeachersList;
