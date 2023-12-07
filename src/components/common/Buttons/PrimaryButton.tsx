import { Button, styled } from '@mui/material';

const PrimaryButton = styled(Button)(({ theme }) => ({
    fontSize: theme.spacing(2.5),
    color: '#0C172F',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '8px 16px',
    // margin: 'auto',
    maxHeight: '42px',
    whiteSpace: 'nowrap',
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    // backgroundColor: '#EC1066',
    background: '#29BCFF',
    fontStretch: 'condensed',
    fontFamily: 'Roboto-condensed, sans-serif',
    '&:hover': {
        backgroundColor: '#29BCFF',
    },
}));

export default PrimaryButton;