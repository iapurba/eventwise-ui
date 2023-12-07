import React from 'react';
import { Box, Typography } from '@mui/material';

interface IconWithTextProps {
    icon: React.ComponentType,
    text: string,
}

const IconWithText: React.FC<IconWithTextProps> = ({ icon: Icon, text }) => {
    return (
        <Box display="flex" alignItems="center" mb={1}>
            {<Icon />}
            <Typography variant="body1" ml={1}>
                {text}
            </Typography>
        </Box>
    );
};

export default IconWithText;