import { Box, Typography } from '@mui/material';
import CustomTabs from '../common/CustomTabs';

const EventAboutInfo = () => {
    return (
        <Box>
            <CustomTabs />
            <Box display="flex" pt={2}>
                <Typography>This is event description block</Typography>
            </Box>
        </Box>
    );
};

export default EventAboutInfo;