import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import EllipsisTypography from '../../../../common/Typography/EllipsisTypography';
import { EventIcon, LocationIcon, PlayCircleIcon } from '../../../../common/StyledIcons/StyledIcons';
import { PrimaryEventCardWrapper } from './PrimaryEventCard.styles';
import EventCardFooter from '../EventCardFooter/EventCardFooter';
import IconTextPair from '../../../../common/IconTextPair/IconTextPair';

export interface PrimaryEventCardProps {
    name: string;
    dateTimeStr: string;
    eventType: string;
    venue: string;
    city: string;
    priceDisplayStr: string;
}

const PrimaryEventCard: React.FC<PrimaryEventCardProps> = ({
    name,
    dateTimeStr,
    eventType,
    venue,
    city,
    priceDisplayStr
}) => {
    return (
        <PrimaryEventCardWrapper>
            <CardMedia
                sx={{ height: 210 }}
                image={`${process.env.PUBLIC_URL}/images/event-poster.png`}
            />
            <CardContent>
                <EllipsisTypography gutterBottom>
                    {name}
                </EllipsisTypography>
                <IconTextPair
                    icon={EventIcon}
                    textVariant='bold'
                    text={dateTimeStr}
                />
                {eventType === 'physical' ? (
                    <IconTextPair
                        icon={LocationIcon}
                        textVariant='bold'
                        text={`${venue}, ${city}`}
                        mb={0}
                    />
                ) : (
                    <IconTextPair
                        icon={PlayCircleIcon}
                        textVariant='bold'
                        text={'Online'}
                        mb={0}
                    />
                )}
            </CardContent>
            <CardActions>
                <EventCardFooter
                    eventType={eventType}
                    priceDisplayStr={priceDisplayStr}
                />
            </CardActions>
        </PrimaryEventCardWrapper>
    );
};

export default PrimaryEventCard;