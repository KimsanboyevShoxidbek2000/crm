import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';





export default function ColumnGroupingTable() {





    return (
        <div className='group-list'>
            <Paper sx={{ width: '100%' }}>
                <TableContainer sx={{ maxHeight: 'calc(100vh - 120px)' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow className='group-header'>
                                <TableCell className='group-header'>
                                    Country
                                </TableCell>
                            </TableRow>
                            <TableRow>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}
