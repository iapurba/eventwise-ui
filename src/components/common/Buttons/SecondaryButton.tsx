import { Button, styled } from '@mui/material';

const SecondaryButton = styled(Button)(({ theme }) => ({
    fontSize: theme.spacing(2.5),
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '8px 16px',
    margin: '0',
    maxHeight: '42px',
    whiteSpace: 'nowrap',
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    backgroundColor: '#EC1066',
    fontStretch: 'condensed',
    fontFamily: 'roboto condensed, sans-serif',
    '&:hover': {
        color: '#FFFFFF',
        backgroundColor: '#EC1066',
    },
}));

export default SecondaryButton;