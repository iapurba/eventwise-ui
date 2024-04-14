import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CartItem } from '../../cartSlice';
import { CustomTableCell, OrderSummaryTableWrapper } from './OrderSummary.styles';
// import { formatToMonthDayString } from '../../../utils/dateTimeFormatter';

interface OrderSummaryTableProps {
    cartItems: CartItem[];
};

const OrderSummaryTable: React.FC<OrderSummaryTableProps> = ({ cartItems }) => {
    console.log(cartItems);
    return (
        <Box className='order-summary-table'>
            <OrderSummaryTableWrapper>
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
                                            {`${item?.event?.startDate} | ${item?.event?.startTime}` }
                                        </Typography>
                                    </CustomTableCell>
                                    <CustomTableCell align='center'>{item?.quantity}</CustomTableCell>
                                    <CustomTableCell align='right'>₹{item?.subTotal}</CustomTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </OrderSummaryTableWrapper>
            <OrderSummaryTableWrapper>
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
            </OrderSummaryTableWrapper>
        </Box>
    );
};

export default OrderSummaryTable;