import { styled } from '@mui/material/styles';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import MicExternalOnRoundedIcon from '@mui/icons-material/MicExternalOnRounded';

export const LocationIcon = styled(PlaceOutlinedIcon)({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
    },
});

export const EventIcon = styled(EventRoundedIcon)({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
    },
});

export const PlayCircleIcon = styled(PlayCircleOutlineRoundedIcon)({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
    },
});

export const CategoryIcon = styled(BookmarkBorderRoundedIcon)({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
    },
});

export const FavouriteIcon = styled(FavoriteBorderOutlinedIcon)({
    fontSize: '20px',
    color: '#45474D',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
    },
});

export const TrendingIcon = styled(TrendingUpRoundedIcon)({
    fontSize: '18px',
    fontWeight: 'bold',
    background: '#EC1066',
    borderRadius: '20px',
    color: '#FFFFFF',
    '&.MuiSvgIcon-root': {
        margin: 0,
        padding: '2px',
    },
});

export const AddIcon = styled(AddRoundedIcon)({
    fontSize: '18px',
    color: 'rgb(194, 0, 0)',
    fontWeight: 'bold',
});

export const RemoveIcon = styled(RemoveRoundedIcon)({
    fontSize: '18px',
    color: 'rgb(194, 0, 0)',
    fontWeight: 'bold',
});

export const WalletIcon = styled(AccountBalanceWalletOutlinedIcon)({
    fontSize: '18px',
    color: '#45474D',
    fontWeight: 'bold',
});

export const LanguageIcon = styled(TranslateRoundedIcon)({
    fontSize: '24px',
    color: '#45474D',
    fontWeight: 'bold',
});

export const MicIcon = styled(MicExternalOnRoundedIcon)({
    fontSize: '24px',
    color: '#45474D',
    fontWeight: 'bold',
});
