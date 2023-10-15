import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const StyledBox = styled(Box)(({ theme }) => ({
    borderBottom: '1px dashed #D0D0D0',
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1)
}));

const CustomTableCell = styled(TableCell)((theme) => ({
    border: 'none',
    padding: '8px 16px',
    fontSize: '14px',
    verticalAlign: 'top',
}));

const data = [
    {
        item: 'Early Bird I Gold I Single I Seating',
        qty: 3,
        subtotal: '2997.00',
    }
];

const OrderSummaryContainer: React.FC = () => {
    return (
        <Box>
            <StyledBox>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow style={{ background: '#F7F7F7' }}>
                                <CustomTableCell>ITEM</CustomTableCell>
                                <CustomTableCell align='center'>QTY</CustomTableCell>
                                <CustomTableCell align='right'>SUBTOTAL</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (
                                <TableRow key={index}>
                                    <CustomTableCell>
                                        <Typography variant='body1'>Early Bird I Gold I Single I Seating</Typography>
                                        <Typography variant='subtitle2'>Beyond Fusion</Typography>
                                        <Typography variant='subtitle2'>October 30 | 7PM</Typography>
                                    </CustomTableCell>
                                    <CustomTableCell align='center'>{row.qty}</CustomTableCell>
                                    <CustomTableCell align='right'>₹{row.subtotal}</CustomTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </StyledBox>
            <StyledBox>
                <Table>
                    <TableBody>
                        <TableRow>
                            <CustomTableCell align='right'>+ Booking Fee</CustomTableCell>
                            <CustomTableCell align='right' width={'100px'}>₹141.57</CustomTableCell>
                        </TableRow>
                        <TableRow>
                            <CustomTableCell align='right'>Total</CustomTableCell>
                            <CustomTableCell align='right'>₹3000.00</CustomTableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </StyledBox>
        </Box>
    );
};

export default OrderSummaryContainer;