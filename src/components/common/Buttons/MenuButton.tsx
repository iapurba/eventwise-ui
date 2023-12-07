import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const MenuButton = styled(Button)(({ theme }) => ({
    borderRadius: '100px',
    color: 'white',
    padding: '7px 15px',
    border: '1px solid rgba(255,255,255,0.2)',
    fontWeight: '600',
    fontSize: '13px',
    marginLeft: '15px',
    textTransform: 'initial',
    '&:hover': {
        borderColor: 'white',
        backgroundColor: 'transparent',
    }
}));

export default MenuButton;