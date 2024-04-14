import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EllipsisTypography from '../../../../common/Typography/EllipsisTypography';
import {
    BookingHistoryContent,
    BookingHistoryFooter,
    BookingHistoryHeader,
    BookingHistoryQRCode,
    BookingHistoryWrapper,
    TicketInfo
} from './BookingHistory.styles';


interface ItemMapperProps {
    label: string;
    value: string;
}
const ItemMapper = ({ label, value }: ItemMapperProps) => {
    return (
        <Box>
            <Typography variant="subtitle2" color="#7A7C82">{label}</Typography>
            <Typography sx={{ fontSize: '17px', color: '#202226' }}>
                {value}
            </Typography>
        </Box>
    );
};

const BookingHistory: React.FC = () => {
    return (
        <BookingHistoryWrapper className='booking-item'>
            <BookingHistoryHeader>
                <EllipsisTypography fontSize={'24px'}>Campus Recruitment and Training Program</EllipsisTypography>
                <TicketInfo
                    label={'1 x Regular Ticket'}
                />
            </BookingHistoryHeader>
            <BookingHistoryContent>
                <Grid container sm={8}>
                    <Grid
                        item
                        sm={12}
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        padding={'12px 0 0'}
                    >
                        <ItemMapper label={'Date'} value={'31 Jul 2023 - 31 Dec 2024'} />
                        <ItemMapper label={'Time'} value={'6:30 PM'} />
                    </Grid>
                    <Grid item padding={'12px 0 0'}>
                        <ItemMapper label={'Location'} value={'South City Mall'} />
                    </Grid>
                </Grid>
                <BookingHistoryQRCode image={`${process.env.PUBLIC_URL}/images/sampleQR.png`} />
            </BookingHistoryContent>
            <BookingHistoryFooter>
                <Typography>
                    Status: <span style={{ fontWeight: 'bold', color: '#45CF12' }}>Booked</span>
                </Typography>
                <Typography>
                    {'Shortcode: '}
                    <span style={{ fontWeight: 'bold' }}>DHA89ZX</span>
                </Typography>
            </BookingHistoryFooter>
        </BookingHistoryWrapper>
    );
};

export default BookingHistory;