import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const UPIInputTextField = styled(TextField)(() => ({
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
            borderColor: '#F0F1F2',
            alignItems: 'center',
        },
        '&:hover fieldset': {
            borderColor: '#F0F1F2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#00B9F9',
            border: '1.5px solid #00B9F9'
        },
    },
}));

export default UPIInputTextField;