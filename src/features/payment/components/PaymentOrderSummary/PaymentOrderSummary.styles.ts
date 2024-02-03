import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const OrderSummaryWrapper = styled(Box)(({ theme }) => ({
    boxShadow: 'none',
    border: '1px solid rgb(240, 241, 242)',
    borderRadius: theme.spacing(1.5),
    padding: '15px 20px 6px',
}));

const OrderSummaryHeader = styled(Typography)(() => ({
    fontSize: '19px',
    color: '#000000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontStretch: 'condensed',
    fontFamily: 'roboto condensed, sans-serif',
}));

const OrderSummaryHeaderWrapper = styled(Box)({
    padding: '12px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
});

const OrderSummaryFooterWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '9px 0 0',
    padding: '9px 0',
    borderTop: '1px solid rgb(240, 241, 242)'
});

const EditIcon = styled(EditRoundedIcon)(() => ({
    border: '1px solid rgb(240, 241, 242)',
    borderRadius: '10px',
    padding: '9px',
    fontSize: '40px',
    cursor: 'pointer',
}));

export {
    OrderSummaryWrapper,
    OrderSummaryHeader,
    EditIcon,
    OrderSummaryHeaderWrapper,
    OrderSummaryFooterWrapper
};