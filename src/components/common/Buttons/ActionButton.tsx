import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ActionButton = styled(Button)({
    marginTop: '16px',
    borderRadius: '6px',
    color: 'inherit',
    padding: '12px 18px',
    border: '1px solid rgb(221, 223, 226)',
    fontSize: '15px',
    textTransform: 'initial',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    '&:hover': {
        border: '1px solid rgb(221, 223, 226)',
        backgroundColor: 'whitesmoke',
    }

});

export default ActionButton;