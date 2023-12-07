import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

interface EventImageProps {
    imageUrl: string;
};

const EventImage: React.FC<EventImageProps> = ({ imageUrl }) => {
    return (
        <Card>
            <CardMedia
                sx={{ height: 450 }}
                image={imageUrl}
            />
        </Card>
    );
};

export default EventImage;

// `${process.env.PUBLIC_URL}/images/event-poster.png`