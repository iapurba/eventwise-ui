import styled from '@emotion/styled';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export const CustomLocationIcon = styled(LocationOnOutlinedIcon)(({ theme }) => ({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
        strokeWidth: '1px',
    },
}));

export const CustomEventIcon = styled(EventOutlinedIcon)(({ theme }) => ({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
        strokeWidth: '1px',
    },
}));

export const CustomBookmarkIcon = styled(BookmarkBorderIcon)(({ theme }) => ({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
        strokeWidth: '1px',
    },
}));

export const CustomFavouriteIcon = styled(FavoriteBorderOutlinedIcon)(({theme}) =>({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
        strokeWidth: '1px',
    },
}));

