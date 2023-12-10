import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import FavouriteEventsContainer from '../../containers/user/FavouriteEventsContainer';
import AccountDetailsUpdate from './AccountDetailsUpdate';
import BookingHistory from '../../containers/bookings/BookingHistory';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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


const UserProfileTabs = () => {
    const [value, setValue] = useState<number>(0);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let path = location.pathname;
        if (path.includes('/tickets')) {
            setValue(0);
        } else if (path.includes('/favourites')) {
            setValue(1);
        } else if (path.includes('/profile')) {
            setValue(2);
        }
    }, [location.pathname]);

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);

        switch (newValue) {
            case 0:
                navigate('/users/me/tickets');
                break;
            case 1:
                navigate('/users/me/favourites');
                break;
            case 2:
                navigate('/users/me/profile');
                break;
            default:
                break;
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                >
                    <CustomTab label="Tickets" />
                    <CustomTab label="Favourites" />
                    <CustomTab label="Edit Profile" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <BookingHistory />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <FavouriteEventsContainer />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <AccountDetailsUpdate />
            </CustomTabPanel>
        </Box>
    );
};

export default UserProfileTabs;