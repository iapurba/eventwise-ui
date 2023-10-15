import { Box, Typography } from '@mui/material';
import CustomTabs from '../common/CustomTabs';

interface EventAboutInfoProps {
    description: string;
};

const EventAboutInfo = ({ description }: EventAboutInfoProps) => {
    return (
        <Box>
            <CustomTabs />
            <Box display="flex" pt={2}>
                <Typography>{description}</Typography>
            </Box>
        </Box>
    );
};

export default EventAboutInfo;