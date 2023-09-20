import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({theme}) => ({
    width: '100%',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '8px 18px',
    maxHeight: '42px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: 'rgb(236, 16, 102)',
    fontStretch: 'condensed',
    fontFamily: 'korolev-condensed, sans-serif',
    '&:hover': {
        backgroundColor: 'rgb(236, 16, 102)',
    },
}));

export default StyledButton;