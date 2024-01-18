import { Button, styled } from '@mui/material';

const ButtonOneWrapper = styled(Button)(
    ({ theme, className }) => ({
        fontSize: '20px',
        color: className?.includes('primary')
            ? '#0C172F' : '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '8px 16px',
        maxHeight: '42px',
        whiteSpace: 'nowrap',
        borderRadius: theme.shape.borderRadius,
        cursor: 'pointer',
        backgroundColor: className?.includes('primary')
            ? '#29BCFF' : '#EC1066',
        fontStretch: 'condensed',
        fontFamily: 'roboto condensed, sans-serif',
        '&:hover': {
            backgroundColor: className?.includes('primary')
                ? '#29BCFF' : '#EC1066',
            color: className?.includes('primary')
                ? '#0C172F' : '#FFFFFF',
        },
    }));

export default ButtonOneWrapper;