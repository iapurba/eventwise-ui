import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CardPayInputTextField = styled(TextField)(() => ({
    '& label': {
        fontSize: '14px',
      },
    'MuiInputBase-input': {
        color: 'red'
    },
    '& label.Mui-focused': {
        color: '#00B9F9',
        fontSize: '16px',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderBottomColor: '#F0F1F2',
            alignItems: 'center',
            // borderBottom: '1.5px solid #00B9F9'
        },
        '&:hover fieldset': {
            borderBottomColor: '#F0F1F2',
        },
        '&.Mui-focused fieldset': {
            borderBottomColor: '#00B9F9',
            borderBottom: '1.5px solid #00B9F9'
        },
    },
}));

export default CardPayInputTextField;