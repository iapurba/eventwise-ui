import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const ProfileHeaderWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    color: '#FFFFFF',
    backgroundColor: '#0C172f',
    padding: '24px',
});

export const ProfileHeaderContent = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    maxWidth: '800px',
    width: '100%',
    margin: 'auto'
});

export const CustomButton = styled(Button)(() => ({
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