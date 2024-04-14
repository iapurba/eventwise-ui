import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

export const CustomTab = styled(Tab)(({ theme }) => ({
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: theme.spacing(2),
    '&.Mui-selected': {
        color: '#0D0F13',
    },
}));