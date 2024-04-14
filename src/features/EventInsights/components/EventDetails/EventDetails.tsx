import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
    CategoryIcon,
    EventIcon,
    LocationIcon,
    PlayCircleIcon,
    WalletIcon
} from '../../../../common/StyledIcons/StyledIcons';
import EventDetailsWrapper, { EventDetailsFooter } from './EventDetails.styles';
import ButtonOne from '../../../../common/Button/MainButton/MainButton';
import IconTextPair from '../../../../common/IconTextPair/IconTextPair';


interface EventDetailsProps {
    name: string;
    category: string;
    venue: string;
    city: string;
    eventType: string;
    dateTimeString: string;
    priceDisplatString: string;
    onBuyClick: () => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({
    name,
    category,
    venue,
    city,
    eventType,
    dateTimeString,
    priceDisplatString,
    onBuyClick
}) => {
    return (
        <EventDetailsWrapper className='event-details'>
            <Box mb={1}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '21px' }}>
                    {name}
                </Typography>
            </Box>
            <IconTextPair
                textVariant='regular'
                icon={CategoryIcon}
                text={category}
            />
            <IconTextPair
                textVariant='regular'
                icon={EventIcon}
                text={dateTimeString}
            />
            {eventType === 'physical'
                ? <IconTextPair
                    textVariant='regular'
                    icon={LocationIcon}
                    text={`${venue}, ${city}`}
                />
                : <IconTextPair
                    textVariant='regular'
                    icon={PlayCircleIcon}
                    text={'Online'}
                />
            }
            <EventDetailsFooter>
                <Box sx={{ display: 'flex', alignItems: "center" }}>
                    <WalletIcon />
                    <Typography sx={{ fontWeight: 'bold', fontSize: '19px', ml: 1 }}>
                        {priceDisplatString}
                    </Typography>
                </Box>
                <ButtonOne
                    primary={false}
                    label='buy now'
                    onClick={onBuyClick}
                />
            </EventDetailsFooter>
        </EventDetailsWrapper>
    );
}

export default EventDetails;