import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import FavouriteEventsContainer from '../../containers/FavouriteEventsContainer';
import AccountDetailsUpdate from './AccountDetailsUpdate';
import BookedTicketsContainer from '../../containers/BookedTicketsContainer';
// import { Outlet } from 'react-router-dom';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {/* <Typography>{children}</Typography> */}
                    {children}
                </Box>
            )}
        </div>
    );
}

const CustomTab = styled(Tab)(({ theme }) => ({
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: theme.spacing(2),
    '&.Mui-selected': {
        color: '#0D0F13',
    },
}));

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const UserProfileTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="user profile tabs"
                    centered
                >
                    <CustomTab label="Tickets" {...a11yProps(0)} />
                    <CustomTab label="Favourites" {...a11yProps(1)} />
                    <CustomTab label="Edit Profile" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <BookedTicketsContainer/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <FavouriteEventsContainer/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <AccountDetailsUpdate/>
            </CustomTabPanel>
            {/* <Outlet/> */}
        </Box>
    );
};

export default UserProfileTabs;