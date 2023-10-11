import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: theme.spacing(2.5),
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '8px 18px',
    maxHeight: '42px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    backgroundColor: '#EC1066',
    fontStretch: 'condensed',
    fontFamily: 'korolev-condensed, sans-serif',
    '&:hover': {
        backgroundColor: '#EC1066',
    },
}));

export default StyledButton;