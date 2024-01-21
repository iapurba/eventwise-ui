import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

const BookingHistoryWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    border: '1px solid #F0F1F2',
    borderRadius: '12px',
    maxWidth: '600px',
    padding: 'none',
}));

const BookingHistoryHeader = styled(Box)(() => ({
    color: '#333333',
    padding: '9px 24px',
    borderBottom: "1px dashed #999",
}));

const BookingHistoryContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    padding: '9px 24px',
    marginBottom: '12px',
}));

const BookingHistoryQRCode = styled(CardMedia)(() => ({
    height: '100px',
    width: '100px',
    border: '1px solid #F0F1F2',
    padding: '0'
}));

const BookingHistoryFooter = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#F0F1F2',
    padding: '9px 24px',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
}));

const TicketInfo = styled(Chip)({
    size: 'small',
    background: '#F0F1F2',
    margin: '6px 0px',
    borderRadius: '6px',
    fontSize: '14px',
})

export {
    BookingHistoryWrapper,
    BookingHistoryHeader,
    BookingHistoryContent,
    BookingHistoryQRCode,
    BookingHistoryFooter,
    TicketInfo,
};