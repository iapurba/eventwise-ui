import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

interface CustomTabsProps {
    centered?: boolean,
}

const CustomTab = styled(Tab)(({ theme }) => ({
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '21px',
    '&.Mui-selected': {
        color: '#0D0F13', // Change the color of the selected tab label to red
    },
}));

const CustomTabs = ({ centered }: CustomTabsProps) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                centered={centered ? true : false}
            >
                <CustomTab label="About" />
            </Tabs>
        </Box>
    );
}

export default CustomTabs;