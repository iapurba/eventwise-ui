import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {
    CategoryIcon,
    EventIcon,
    LocationIcon,
    PlayCircleIcon,
    WalletIcon
} from '../common/Icons/StyledIcons';
import ContentBoxWrapper from '../common/ContentBoxWrapper';
import { formatDate } from '../../utils/dateTimeFormatter';
import IconWithText from '../common/IconWithText';
import SecondaryButton from '../common/Buttons/SecondaryButton';


const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    alignItems: 'center',
    width: '100%',
}));

const EventInformation = ({ event, onBuyClick }: any) => {

    return (
        <ContentBoxWrapper>
            <Box
                mb={1}
                display="flex"
                alignItems="center"
                justifyContent={'space-between'}
            >
                <Typography sx={{ fontWeight: 'bold', fontSize: '21px' }}>
                    {event?.title}
                </Typography>
            </Box>
            <IconWithText icon={CategoryIcon} text={event?.category} />
            <IconWithText
                icon={EventIcon}
                text={`${formatDate(event?.startDate)} | ${event?.startTime}`}
            />
            {event.eventType === 'physical' ? (
                <IconWithText icon={LocationIcon} text={`${event.location.venue}, ${event.location.address.city}`} />
            ) : (
                <IconWithText icon={PlayCircleIcon} text={'Online'} />
            )}
            <StyledBox mt={1}>
                <Box sx={{ display: 'flex', alignItems: "center" }}>
                    <WalletIcon />
                    <Typography sx={{ fontWeight: 'bold', fontSize: '19px', ml: 1 }}>
                        {event.startingPrice === 'Free'
                            ? 'FREE'
                            : `₹${event.startingPrice}`
                        }
                    </Typography>
                </Box>
                <SecondaryButton
                    sx={{ font: 'Roboto Condensed'}}
                    onClick={onBuyClick}>
                    {'BUY NOW'}
                </SecondaryButton>
            </StyledBox>
        </ContentBoxWrapper>
    );
}

export default EventInformation;