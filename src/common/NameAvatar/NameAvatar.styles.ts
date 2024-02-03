import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

export const NameAvatarWrapper = styled(Avatar)(() => ({
    border: '1px solid rgba(255,255,255,0.2)',
    fontSize: '14px',
    backgroundColor: 'transparent',
    color: 'white',
    marginLeft: '15px',
    '&:hover': {
        borderColor: 'white',
        backgroundColor: 'transparent',
    }
}));