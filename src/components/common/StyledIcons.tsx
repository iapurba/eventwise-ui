import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import { styled } from '@mui/material/styles';

export const StyledLocationIcon = styled(LocationOnOutlinedIcon)(() => ({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
    },
}));

export const StyledEventIcon = styled(EventOutlinedIcon)(() => ({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
    },
}));

export const StyledBookmarkIcon = styled(BookmarkBorderIcon)(() => ({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
    },
}));

export const StyledFavouriteIcon = styled(FavoriteBorderOutlinedIcon)(() => ({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
    },
}));

export const StyledTrendingIcon = styled(TrendingUpOutlinedIcon)(() => ({
    fontSize: '18px',
    fontWeight: 'bold',
    background: '#EC1066',
    borderRadius: '20px',
    color: '#FFFFFF',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: '2px',
    },
}));
