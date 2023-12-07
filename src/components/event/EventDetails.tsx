import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ContentBoxWrapper from '../common/Wrappers/ContentBoxWrapper';
import { formatDate } from '../../utils/dateTimeFormatter';
import IconWithText from '../common/IconWithText';
import SecondaryButton from '../common/Buttons/SecondaryButton';
import { EventType } from '../../types/EventType';
import {
    CategoryIcon,
    EventIcon,
    LocationIcon,
    PlayCircleIcon,
    WalletIcon
} from '../common/Icons/StyledIcons';


const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    alignItems: 'center',
    width: '100%',
}));

interface EventDetailsProps {
    event: EventType;
    onBuyClick: () => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event, onBuyClick }) => {
    const { title, category, startDate, startTime, location, startingPrice } = event;
    return (
        <ContentBoxWrapper>
            <Box mb={1}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '21px' }}>
                    {title}
                </Typography>
            </Box>
            <IconWithText icon={CategoryIcon} text={category} />
            <IconWithText
                icon={EventIcon}
                text={`${formatDate(startDate)} | ${startTime}`}
            />
            {event.eventType === 'physical' ? (
                <IconWithText icon={LocationIcon} text={`${location.venue}, ${location.address.city}`} />
            ) : (
                <IconWithText icon={PlayCircleIcon} text={'Online'} />
            )}
            <StyledBox mt={1}>
                <Box sx={{ display: 'flex', alignItems: "center" }}>
                    <WalletIcon />
                    <Typography sx={{ fontWeight: 'bold', fontSize: '19px', ml: 1 }}>
                        {event.startingPrice === 'Free'
                            ? 'FREE'
                            : `₹${startingPrice}`
                        }
                    </Typography>
                </Box>
                <SecondaryButton
                    sx={{ font: 'Roboto Condensed' }}
                    onClick={onBuyClick}>
                    {'BUY NOW'}
                </SecondaryButton>
            </StyledBox>
        </ContentBoxWrapper>
    );
}

export default EventDetails;