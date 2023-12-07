import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ContentBoxWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    border: '1px solid rgb(225, 227, 230)',
    borderRadius: theme.spacing(1),
    padding: '18px'
}));

export default ContentBoxWrapper;