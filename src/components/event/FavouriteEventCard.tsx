import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EllipsisTypography from '../common/EllipsisTypography';


const FavouriteEventCard = () => {
    return (
        <Grid container spacing={2}>
            <Grid item sm={5}>
                <Card>
                    <CardMedia
                        sx={{ height: 120, width: 'auto' }}
                        image={`${process.env.PUBLIC_URL}/images/event-poster.jpg`}
                    />
                </Card>
            </Grid>
            <Grid item sm={7}>
                <EllipsisTypography variant='subtitle1'>
                    {'When Chai Met Toast - Love You The Same Tour | Kolkata'}
                </EllipsisTypography>
                <Typography variant='subtitle2'>
                    {`December 2 | 6PM`}
                </Typography>
                <Typography variant='subtitle2'>
                    <span>&#8377;</span>{`1000 Onwards`}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default FavouriteEventCard;