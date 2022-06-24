import React from 'react';
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
import './componentsStyle/CopStyle.css'

const columns = [
    { id: '1', label: '#' },
    { id: 'name', label: 'Name' },
    {
        id: 'surname',
        label: 'Surname',
        align: 'left',
    },
    {
        id: 'address',
        label: 'Address',
        align: 'left',
    },
    {
        id: 'phone',
        label: 'Phone',
        align: 'left',
    },
    {
        id: 'action',
        label: 'Action',
        align: 'center',
    },
];

const datas = [
    {
        id: 1,
        name: 'Shoxidbek',
        surname: 'Kimsanboyev',
        username: "kimsanShox",
        address: 'MFY teshtosh',
        phone: 9014787741
    },
    {
        id: 2,
        name: 'Shoxidbek',
        surname: 'Kimsanboyev',
        username: "kimsanShox",
        address: 'MFY teshtosh',
        phone: 9014787741
    },
    {
        id: 3,
        name: 'Shoxidbek',
        surname: 'Kimsanboyev',
        username: "kimsanShox",
        address: 'MFY teshtosh',
        phone: 9014787741
    },
    {
        id: 4,
        name: 'Shoxidbek',
        surname: 'Kimsanboyev',
        username: "kimsanShox",
        address: 'MFY teshtosh',
        phone: 9014787741
    },
    {
        id: 5,
        name: 'Shoxidbek',
        surname: 'Kimsanboyev',
        username: "kimsanShox",
        address: 'MFY teshtosh',
        phone: 9014787741
    },
    {
        id: 6,
        name: 'Shoxidbek',
        surname: 'Kimsanboyev',
        username: "kimsanShox",
        address: 'MFY teshtosh',
        phone: 9014787741
    },
    {
        id: 7,
        name: 'Shoxidbek',
        surname: 'Kimsanboyev',
        username: "kimsanShox",
        address: 'MFY teshtosh',
        phone: 9014787741
    },
    {
        id: 8,
        name: 'Shoxidbek',
        surname: 'Kimsanboyev',
        username: "kimsanShox",
        address: 'MFY teshtosh',
        phone: 9014787741
    },
    {
        id: 9,
        name: 'Shoxidbek',
        surname: 'Kimsanboyev',
        username: "kimsanShox",
        address: 'MFY teshtosh',
        phone: 9014787741
    },
    {
        id: 10,
        name: 'Shoxidbek',
        surname: 'Kimsanboyev',
        username: "kimsanShox",
        address: 'MFY teshtosh',
        phone: 9014787741
    },
    {
        id: 11,
        name: 'Shoxidbek',
        surname: 'Kimsanboyev',
        username: "kimsanShox",
        address: 'MFY teshtosh',
        phone: 9014787741
    },
    {
        id: 12,
        name: 'Shoxidbek',
        surname: 'Kimsanboyev',
        username: "kimsanShox",
        address: 'MFY teshtosh',
        phone: 9014787741
    },
]

export default function StudentsList() {


    return (
        <div className='student-list'>
            <Paper sx={{ width: '100%' }}>
                <div className='student-header'>
                    <div className="student-header-left">
                        <div>
                            <h2 className='student-staff'>
                                Student Details
                            </h2>
                        </div>
                        <div>
                            <button className='student-staff-btn'>
                                Add Student
                            </button>
                            <button className='student-staff-btn'>
                                Pending Students
                            </button>
                            <button className='student-staff-btn'>
                                Active Students
                            </button>
                        </div>
                    </div>
                    <div className="student-header-right">
                        <input className='search-input' type="search" placeholder='Search...' />
                    </div>
                </div>
                <TableContainer sx={{ maxHeight: "calc(80vh - 100px)" }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {
                                    columns.map((column) => (
                                        <TableCell style={{ fontWeight: 'bold' }} key={column.id} align={column.align}>
                                            {column.label}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datas
                                .map((data) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={data.id}>
                                            <TableCell>
                                                {data.id}
                                            </TableCell>
                                            <TableCell>
                                                {data.name}
                                            </TableCell>
                                            <TableCell>
                                                {data.surname}
                                            </TableCell>
                                            <TableCell>
                                                {data.address}
                                            </TableCell>
                                            <TableCell>
                                                {data.phone}
                                            </TableCell>
                                            <TableCell align='center'>
                                                    <Button style={{margin:'0 5px'}}  variant="outlined" startIcon={<EditIcon />}>
                                                        Edit
                                                    </Button >
                                                    <Button style={{margin:'0 5px'}} color='error' variant="outlined" startIcon={<DeleteIcon />}>
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
