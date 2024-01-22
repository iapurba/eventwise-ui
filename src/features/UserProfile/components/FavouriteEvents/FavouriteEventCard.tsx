import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EllipsisTypography from '../../../../components/common/Typography/EllipsisTypography';

interface FavouriteEventCardProps {
    name: string;
    dateTimeString: string;
    priceDisplayString: string;
    imageUrl?: string;
}

const FavouriteEventCard: React.FC<FavouriteEventCardProps> = ({
    name,
    dateTimeString,
    priceDisplayString,
    imageUrl,
}) => {
    return (
        <Grid container spacing={2}>
            <Grid item sm={5}>
                <Card>
                    <CardMedia
                        sx={{ height: 122, width: 'auto' }}
                        image={`${process.env.PUBLIC_URL}/images/event-poster.png`}
                    />
                </Card>
            </Grid>
            <Grid item sm={7}>
                <EllipsisTypography variant='subtitle1'>
                    {name}
                </EllipsisTypography>
                <Typography variant='subtitle2'>{dateTimeString}</Typography>
                <Typography variant='subtitle2'>{priceDisplayString}</Typography>
            </Grid>
        </Grid>
    );
};

export default FavouriteEventCard;