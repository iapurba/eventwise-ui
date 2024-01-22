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
import { formatToMonthDayString } from '../../../utils/dateTimeFormatter';
import { CartItem } from '../cartSlice';

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

interface OrderSummaryContainerProps {
    cartItems: CartItem[];
};

const OrderSummaryContainer: React.FC<OrderSummaryContainerProps> = ({ cartItems }) => {
    console.log(cartItems);
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
                            {cartItems.map((item, index) => (
                                <TableRow key={index}>
                                    <CustomTableCell>
                                        <Typography variant='body1'>{item.ticketType}</Typography>
                                        <Typography variant='subtitle2'>{item?.event?.title}</Typography>
                                        <Typography variant='subtitle2'>
                                            {`${formatToMonthDayString(item?.event?.startDate)} | ${item?.event?.startTime}` }
                                        </Typography>
                                    </CustomTableCell>
                                    <CustomTableCell align='center'>{item?.quantity}</CustomTableCell>
                                    <CustomTableCell align='right'>₹{item?.subTotal}</CustomTableCell>
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