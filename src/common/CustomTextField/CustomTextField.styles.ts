import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const TextFieldWithBorderOnly = styled(TextField)(
    ({ className }) => ({
        '& label.Mui-focused': {
            color: '#A0AAB4',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#F0F1F2',
            },
            '&:hover fieldset': {
                borderColor: '#F0F1F2',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#00B9F9',
            },
            ...(className && className.includes('error') && {
                '& fieldset': {
                    border: '1px solid rgb(237, 47, 33)',
                },
            }),
        },
    }));

export const TextFieldWithBorderAndLabel = styled(TextField)(() => ({
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

export const TextFieldWithBottomBorderAndLabel = styled(TextField)(
    ({ className }) => ({
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
