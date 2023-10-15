import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    border: '1px solid #F0F1F2',
    borderRadius: theme.spacing(1.5),
    cursor: 'pointer',
    '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
    },
}));

export default StyledCard;