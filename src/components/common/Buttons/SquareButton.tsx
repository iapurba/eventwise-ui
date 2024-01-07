import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const SquareButton = styled(Button)(() => ({
    borderRadius: '6px',
    color: 'white',
    padding: '7px 15px',
    border: '1px solid rgba(255,255,255,0.2)',
    fontSize: '13px',
    marginLeft: '15px',
    textTransform: 'uppercase',
    '&:hover': {
        borderColor: '1px solid rgba(255,255,255,0.2)',
        backgroundColor: 'transparent',
    }
}));

export default SquareButton;