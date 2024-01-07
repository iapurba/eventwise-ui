import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import EllipsisTypography from '../../../../components/common/Typography/EllipsisTypography';
import Chip from '@mui/material/Chip';


const BookingWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    border: '1px solid #F0F1F2',
    borderRadius: '12px',
    maxWidth: '600px',
    padding: 'none',
}));

const BookingHeader = styled(Box)(() => ({
    color: '#333333',
    padding: '9px 24px',
    borderBottom: "1px dashed #999",
}));

const BookingContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    padding: '9px 24px',
    marginBottom: '12px',
}));

const QRCodeImage = styled(CardMedia)(() => ({
    height: '100px',
    width: '100px',
    border: '1px solid #F0F1F2',
    padding: '0'
}));

const BookingFooter = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#F0F1F2',
    padding: '9px 24px',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
}));

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

const Booking = () => {
    return (
        <BookingWrapper className='booking-item'>
            <BookingHeader>
                <EllipsisTypography fontSize={'24px'}>Campus Recruitment and Training Program</EllipsisTypography>
                <Chip
                    label={'1 x Regular Ticket'}
                    size='small'
                    sx={{
                        background: '#F0F1F2',
                        margin: '6px 0px',
                        borderRadius: '6px',
                        fontSize: '14px'
                    }}
                />
            </BookingHeader>
            <BookingContent>
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
                <QRCodeImage image={`${process.env.PUBLIC_URL}/images/sampleQR.png`} />
            </BookingContent>
            <BookingFooter>
                <Typography>
                    Status: <span style={{ fontWeight: 'bold', color: '#45CF12' }}>Booked</span>
                </Typography>
                <Typography>
                    {'Shortcode: '}
                    <span style={{ fontWeight: 'bold' }}>DHA89ZX</span>
                </Typography>
            </BookingFooter>
        </BookingWrapper>
    );
};

export default Booking;