import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    border: '1px solid #F0F1F2',
    borderRadius: theme.spacing(1),
}));


const Booking = () => {
    return (
        <StyledBox sx={{ maxWidth: 600, padding:'none'}}>
            <Grid container>
                <Grid item sm={12} padding={'9px 24px'} sx={{ borderBottom: "1px dashed #999" }}>
                    <Typography variant='h6'>Campus Recruitment and Training Program</Typography>
                </Grid>
                <Grid item container sm={8} padding={'9px 24px'}>
                    <Grid item sm={6}>
                        <Typography variant="subtitle2">Date</Typography>
                        <Typography variant="body1">31 Oct 2023</Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant="subtitle2">Time</Typography>
                        <Typography variant="body1">6:30 PM</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">location</Typography>
                        <Typography variant="body1">South City Mall</Typography>
                    </Grid>
                </Grid>
                <Grid item sm={3} justifyContent={'flex-end'} marginLeft={'auto'}>
                    <CardMedia
                        sx={{ height: 100, width: 100 }}
                        image={`${process.env.PUBLIC_URL}/images/sampleQR.png`}
                    />
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: '#F0F1F2',
                    padding: '9px 24px'
                }}
            >
                <Typography>Status: BOOKED</Typography>
                <Typography>Short Code: DHA89ZX</Typography>
            </Box>
        </StyledBox>
    );
};

export default Booking;