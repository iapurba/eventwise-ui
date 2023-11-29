import { Box, Typography } from '@mui/material';
import CustomTabs from '../common/CustomTabs';

interface EventDetailedContentProps {
    details: {
        description: string;
        termsAndConditions?: string;
    }
};

const EventDetailedContent: React.FC<EventDetailedContentProps> = ({ details }) => {
    return (
        <Box>
            <CustomTabs />
            <Box display="flex" pt={2}>
                <Typography>{details?.description}</Typography>
            </Box>
        </Box>
    );
};

export default EventDetailedContent;