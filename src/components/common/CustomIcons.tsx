import styled from '@emotion/styled';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';

export const CustomLocationIcon = styled(LocationOnOutlinedIcon)(({ theme }) => ({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
        strokeWidth: '1px',
    },
}));

export const CustomEventOutlinedIcon = styled(EventOutlinedIcon)(({ theme }) => ({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
        strokeWidth: '1px',
    },
}));