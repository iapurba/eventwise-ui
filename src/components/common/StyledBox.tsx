import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    border: '1px solid #F0F1F2',
    borderRadius: theme.spacing(1),
    padding: '12px'
}));

export default StyledBox;