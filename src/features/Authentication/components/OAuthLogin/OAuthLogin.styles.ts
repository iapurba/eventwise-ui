import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const GoogleLoginBtnWrapper = styled(Button)({
    borderRadius: '2px',
    textTransform: 'uppercase',
    padding: '8px 20px',
    background: 'rgba(219, 68, 55, .9)',
    boxShadow: 'none',
    '&:hover': {
        background: 'rgba(219, 68, 55, 1)'
    },
});

const AppleLoginBtnWrapper = styled(Button)({
    borderRadius: '2px',
    textTransform: 'uppercase',
    padding: '8px 20px',
    background: 'rgba(0, 0, 0, .8)',
    boxShadow: 'none',
    '&:hover': {
        background: 'rgba(0, 0, 0, .9)'
    },
});

export {GoogleLoginBtnWrapper, AppleLoginBtnWrapper};