import React, { useState } from 'react';

import '../Admin/componentsStyle/CopStyle.css'

import { Button } from '@mui/material';
const TeachersList = () => {

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
    return (
        <>
            <div className='teacher-list'>
                <table className='teacher-table'>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Surname
                            </th>
                            <th>
                                Username
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Phone
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas && datas.map(data => {
                                return (
                                    <tr>
                                      <td>
                                        {data.id}
                                      </td>
                                      <td>
                                        {data.name}
                                      </td>
                                      <td>
                                        {data.surname}
                                      </td>
                                      <td>
                                        {data.username}
                                      </td>
                                      <td>
                                        {data.address}
                                      </td>
                                      <td>
                                        {data.phone}
                                      </td>
                                      <td>
                                        <Button  style={{margin: '2px'}}  variant="contained">
                                           Edit
                                        </Button>
                                        <Button style={{margin: '2px'}}  variant="contained" color="error">
                                           Delete
                                        </Button>
                                      </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TeachersList;
