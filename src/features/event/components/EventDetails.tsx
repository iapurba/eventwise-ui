import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ContentBoxWrapper from '../../../components/common/wrappers/ContentBoxWrapper';
import IconWithText from '../../../components/common/IconWithText';
import SecondaryButton from '../../../components/common/Buttons/SecondaryButton';
import {
    CategoryIcon,
    EventIcon,
    LocationIcon,
    PlayCircleIcon,
    WalletIcon
} from '../../../components/common/Icons/StyledIcons';
import { Venue } from '../types/event';


const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    alignItems: 'center',
    width: '100%',
}));

interface EventDetailsProps {
    name: string;
    category: string;
    venue: Venue;
    eventType: string;
    dateTimeString: string;
    priceDisplatString: string;
    onBuyClick: () => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({
    name,
    category,
    venue,
    eventType,
    dateTimeString,
    priceDisplatString,
    onBuyClick
}) => {
    return (
        <ContentBoxWrapper>
            <Box mb={1}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '21px' }}>
                    {name}
                </Typography>
            </Box>
            <IconWithText icon={CategoryIcon} text={category} />
            <IconWithText
                icon={EventIcon}
                text={dateTimeString}
            />
            {eventType === 'physical' ? (
                <IconWithText icon={LocationIcon} text={`${venue?.name}, ${venue?.address?.city}`} />
            ) : (
                <IconWithText icon={PlayCircleIcon} text={'Online'} />
            )}
            <StyledBox mt={1}>
                <Box sx={{ display: 'flex', alignItems: "center" }}>
                    <WalletIcon />
                    <Typography sx={{ fontWeight: 'bold', fontSize: '19px', ml: 1 }}>
                        {priceDisplatString}
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