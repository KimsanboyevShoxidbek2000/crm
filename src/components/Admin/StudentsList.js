import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Modal,
    Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './componentsStyle/CopStyle.css'
import { FiSearch} from 'react-icons/fi';
import { bgcolor } from '@mui/system';


// import { useGet } from '../../hooks/useGet';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};



const StudentsList = () => {
    const [search, setSearch] = useState(false)
    const [getSearch, setGetSearch] = useState('');
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    // const [data ,  setData] = useState()
    // const getDatas = useGet('posts');
    const [userImg , setUserImg] = useState('')
   




    const datas = [
        {
            id: 1,
            name: 'sadasdasd',
            surname: 'Kimsanboyev',
            username: "kimsanShox",
            address: 'MFY teshtosh',
            phone: 9014787741,
            parent_phone: 1123546646454,
            image: 'hello',
            group: "B2"
        },
        {
            id: 2,
            name: 'asdassdad',
            surname: 'Kimsanboyev',
            username: "kimsanShox",
            address: 'MFY teshtosh',
            phone: 9014787741,
            parent_phone: 1123546646454,
            image: 'hello',
            group: "B2"
        },
        {
            id: 3,
            name: 'grfgfg',
            surname: 'Kimsanboyev',
            username: "kimsanShox",
            address: 'MFY teshtosh',
            phone: 9014787741,
            parent_phone: 1123546646454,
            image: 'hello',
            group: "B2"
        },
        {
            id: 4,
            name: 'dfgdgdfgd',
            surname: 'Kimsanboyev',
            username: "kimsanShox",
            address: 'MFY teshtosh',
            phone: 9014787741,
            parent_phone: 1123546646454,
            image: 'hello',
            group: "B2",

        },
        {
            id: 5,
            name: 'fdggdgdf',
            surname: 'Kimsanboyev',
            username: "kimsanShox",
            address: 'MFY teshtosh',
            phone: 9014787741,
            parent_phone: 1123546646454,
            image: 'hello',
            group: "B2"
        },
        {
            id: 6,
            name: 'yytjtyjy',
            surname: 'Kimsanboyev',
            username: "kimsanShox",
            address: 'MFY teshtosh',
            phone: 9014787741,
            parent_phone: 1123546646454,
            image: 'hello',
            group: "B2"
        },
        {
            id: 7,
            name: 'tyjtyjtyjt',
            surname: 'Kimsanboyev',
            username: "kimsanShox",
            address: 'MFY teshtosh',
            phone: 9014787741,
            parent_phone: 1123546646454,
            image: 'hello',
            group: "B2"
        },
        {
            id: 8,
            name: 'tyjttr',
            surname: 'Kimsanboyev',
            username: "kimsanShox",
            address: 'MFY teshtosh',
            phone: 9014787741,
            parent_phone: 1123546646454,
            image: 'hello',
            group: "B2"
        },
        {
            id: 9,
            name: 'jjhghjghj',
            surname: 'Kimsanboyev',
            username: "kimsanShox",
            address: 'MFY teshtosh',
            phone: 9014787741,
            parent_phone: 1123546646454,
            image: 'hello',
            group: "B2"
        },
        {
            id: 10,
            name: 'hgjhgjhgj',
            surname: 'Kimsanboyev',
            username: "kimsanShox",
            address: 'MFY teshtosh',
            phone: 9014787741,
            parent_phone: 1123546646454,
            image: 'hello',
            group: "B2"
        },
        {
            id: 11,
            name: 'hgjghjh',
            surname: 'Kimsanboyev',
            username: "kimsanShox",
            address: 'MFY teshtosh',
            phone: 9014787741,
            parent_phone: 1123546646454,
            image: 'hello',
            group: "B2"
        },
        {
            id: 12,
            name: 'Shoxidbek',
            surname: 'Kimsanboyev',
            username: "kimsanShox",
            address: 'MFY teshtosh',
            phone: 9014787741,
            parent_phone: 1123546646454,
            image: 'hello',
            group: "B2"
        },
    ]
    const columns = [
        { id: '1', label: '#', minWidth: 40 },
        { id: 'name', label: 'Name', minWidth: 150 },
        {
            id: 'surname',
            label: 'Surname',
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
            id: 'group',
            label: 'Group',
            align: "left",
            minWidth: 150
        },
        {
            id: 'to\'lov',
            label: 'To\'lov',
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

    const handlePay = (user_id) => {
        setOpen(true);

    }

    return (
        <>
            <div className='student-list'>
                {/* modal section start */}
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                       <label
                       style={{
                        position:"relative",
                        width:'100%',
                        height: '60px',
                       }}
                         htmlFor="user-img" className='userImg'>
                          <input style={{opacity:0}} type="file" id='user-img' onChange={(e) => {
                            const file = URL.createObjectURL(e.target.files[0])
                            setUserImg(file)
                          }}/>
                          <img style={{
                            position:'absolute',
                            width: '90px',
                            height: '90px',
                            borderRadius:'50%',
                            left: '60%',
                            top:'10px',
                            cursor:'pointer',
                            }} src={`${userImg.length > 0 ? `${userImg}`:`https://cdn-icons-png.flaticon.com/512/149/149071.png` }`} alt="error" />
                       </label>
                       <div style={{
                             position: 'absolute',
                             top: '120px',
                             textAlign:'center',
                             width:'100%',
                             height: '50px',
                             background:'pink'                                                         
                       }}>
                         <h3>Shoxidbek</h3>
                         <h3>Kimsanboyev</h3>
                       </div>
                    </Box>
                </Modal>
                {/* modal section end */}
                <Paper sx={{ width: '100%' }}>
                    <div className='student-header'>
                        <div className="student-header-left">
                            <div>
                                <h2 className='student-staff'>
                                    Student Details
                                </h2>
                            </div>
                            <div>
                                <Link to='/studentsList' className='nav-item'><span>Add Student</span><i></i></Link>
                                <Link to='/studentsList' className='nav-item' ><span>Pendding Students</span><i></i></Link>
                                <Link to='/studentsList' className='nav-item'><span>Active Students</span><i></i></Link>
                            </div>
                        </div>
                        <div className="student-header-right">
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
                    <TableContainer sx={{ maxHeight: "calc(80vh - 100px)" }}>
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
                                {datas.filter(data => data.name.toLowerCase().includes(getSearch.toLowerCase()))
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
                                                    S: {data.phone} <br />
                                                    P: {data.parent_phone}
                                                </TableCell>
                                                <TableCell>
                                                    {data.group}
                                                </TableCell>
                                                <TableCell>
                                                    <button onClick={() => handlePay(data.id)}>300</button>
                                                </TableCell>
                                                <TableCell align='center'>
                                                    <Button style={{ margin: '2px 5px' }} variant="outlined" startIcon={<EditIcon />}>
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
    );
}

export default StudentsList;
