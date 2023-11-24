import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const CircularIconButton = styled(IconButton)(({ theme }) => ({
    border: '1px solid rgba(255,255,255,0.2)',
    fontSize: '13px',
    padding: '7px',
    borderRadius: '100px',
    backgroundColor: 'transparent',
    color: 'white',
    marginLeft: '15px',
    '&:hover': {
        borderColor: 'white',
        backgroundColor: 'transparent',
    }
}));

export default CircularIconButton;