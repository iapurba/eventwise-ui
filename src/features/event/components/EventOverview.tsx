import { Box, Typography } from '@mui/material';
import CustomTabs from '../../../components/common/CustomTabs';
import { Faq } from '../../types/event';

interface EventOverviewProps {
    description: string;
    terms: string[];
    safetyMesures: string[];
    faqs: Faq[];
};

const EventOverview: React.FC<EventOverviewProps> = ({
    description,
    terms,
    safetyMesures,
    faqs
}) => {
    return (
        <Box>
            <CustomTabs />
            <Box display="flex" pt={2}>
                <Typography>{description}</Typography>
            </Box>
        </Box>
    );
};

export default EventOverview;