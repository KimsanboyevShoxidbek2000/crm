
import React, { useState } from 'react';
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

import { useGet } from '../hooks/useGet';
import '../components/Admin/componentsStyle/CopStyle.css'

const Group = () => {
    const [search, setSearch] = useState(false)
    const [getSearch, setGetSearch] = useState('');
    const [userId, setUserId] = useState(null)
    const getGroup = useGet('core/group-list/')

    const columns = [
        { id: '1', label: '#', minWidth: 40 },
        { id: 'name', label: 'Name', minWidth: 150 },
        {
            id: 'level',
            label: 'level',
            align: 'left',
            minWidth: 150
        },
        {
            id: 'teacher',
            label: 'teacher',
            align: 'left',
            minWidth: 150
        },
        {
            id: 'price',
            label: 'price',
            align: 'left',
            minWidth: 100
        },
        {
            id: 'start',
            label: 'start',
            align: "left",
            minWidth: 100
        },
        {
            id: 'end',
            label: 'end',
            align: "left",
            minWidth: 100
        },
        {
            id: 'action',
            label: 'Action',
            align: 'center',
            minWidth: 200
        },
    ];
    return (
        <div className='group-list'>
            <Paper sx={{ width: '100%' }} style={{ borderRadius: '15px 15px 0 15px' }}>
                <div className='group-header'>
                    <div className="group-header-left">
                        <div>
                            <h2 className='group-staff'>
                                Group Details
                            </h2>
                        </div>
                        <div>
                            <Link to='/studentsList' className='nav-item'><span>Add Group</span><i></i></Link>
                            <Link to='/studentsList' className='nav-item' ><span>Pendding Groups</span><i></i></Link>
                            <Link to='/studentsList' className='nav-item'><span>Active Groups</span><i></i></Link>
                        </div>
                    </div>
                    <div className="group-header-right">
                        <div className={`${search ? 'active' : ''}  search`}>
                            <input value={getSearch} onChange={(e) => setGetSearch(e.target.value)} type="text" className={`input`} placeholder="Search..." />
                            <button className="btn" onClick={() => {
                                setSearch(!search)
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
                            {getGroup.filter(data => data.name.toLowerCase().includes(getSearch.toLowerCase()))
                                .map((data) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={data.id}>
                                            <TableCell>
                                                {

                                                }
                                            </TableCell>
                                            <TableCell>
                                                {data.name}
                                            </TableCell>
                                            <TableCell>
                                                {data.level}
                                            </TableCell>
                                            <TableCell>
                                                {data.teacher}
                                            </TableCell>
                                            <TableCell>
                                                {data.price} ming
                                            </TableCell>
                                            <TableCell>
                                                {data.from_time}
                                            </TableCell>
                                            <TableCell>
                                                {data.to_time}
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
    );
}


export default Group;