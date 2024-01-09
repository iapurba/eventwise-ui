import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import EllipsisTypography from '../../../../components/common/Typography/EllipsisTypography';
import { EventIcon, LocationIcon, PlayCircleIcon } from '../../../../components/common/Icons/StyledIcons';
import { PrimaryEventCardText, PrimaryEventCardWrapper } from './PrimaryEventCard.styles';
import EventCardFooter from '../EventCardFooter/EventCardFooter';

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
                <Box display="flex" alignItems="center" mb={1}>
                    <EventIcon />
                    <PrimaryEventCardText>
                        {dateTimeStr}
                    </PrimaryEventCardText>
                </Box>
                <Box display="flex" alignItems="center">
                    {
                        eventType === 'physical' ? (
                            <>
                                <LocationIcon />
                                <PrimaryEventCardText>
                                    {`${venue}, ${city}`}
                                </PrimaryEventCardText>
                            </>
                        ) : (
                            <>
                                <PlayCircleIcon />
                                <PrimaryEventCardText>
                                    Online
                                </PrimaryEventCardText>
                            </>
                        )}

                </Box>
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