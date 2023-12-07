import { Box, Typography } from '@mui/material';
import CustomTabs from '../common/CustomTabs';

interface EventOverviewProps {
    details: {
        description: string;
        termsAndConditions?: string;
    }
};

const EventOverview: React.FC<EventOverviewProps> = ({ details }) => {
    return (
        <Box>
            <CustomTabs />
            <Box display="flex" pt={2}>
                <Typography>{details?.description}</Typography>
            </Box>
        </Box>
    );
};

export default EventOverview;