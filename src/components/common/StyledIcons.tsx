import { styled } from '@mui/material/styles';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';


export const StyledLocationIcon = styled(PlaceOutlinedIcon)(() => ({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
    },
}));

export const StyledEventIcon = styled(EventRoundedIcon)(() => ({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
    },
}));

export const StyledPlayCircleIcon = styled(PlayCircleOutlineRoundedIcon)(() => ({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
    },
}))

export const StyledBookmarkIcon = styled(BookmarkBorderRoundedIcon)(() => ({
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

export const StyledTrendingIcon = styled(TrendingUpRoundedIcon)(() => ({
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

export const StyledAddIcon = styled(AddRoundedIcon)(() => ({
    fontSize: '18px',
    color: 'rgb(194, 0, 0)',
    fontWeight: 'bold',
}));

export const StyledRemoveIcon = styled(RemoveRoundedIcon)(() => ({
    fontSize: '18px',
    color: 'rgb(194, 0, 0)',
    fontWeight: 'bold',
}))
