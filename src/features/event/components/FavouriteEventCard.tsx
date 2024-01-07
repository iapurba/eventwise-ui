import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EllipsisTypography from '../../../components/common/Typography/EllipsisTypography';

interface FavouriteEventCardProps {
    title: string;
    dateTimeStr: string;
    priceStr: string;
    imageUrl?: string;
}

const FavouriteEventCard: React.FC<FavouriteEventCardProps> = ({
    title,
    dateTimeStr,
    priceStr,
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
                    {title}
                </EllipsisTypography>
                <Typography variant='subtitle2'>{dateTimeStr}</Typography>
                <Typography variant='subtitle2'>{priceStr}</Typography>
            </Grid>
        </Grid>
    );
};

export default FavouriteEventCard;