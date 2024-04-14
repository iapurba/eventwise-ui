import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

export const OrderSummaryTableWrapper = styled(Box)({
    borderBottom: '1px dashed #D0D0D0',
    paddingBottom: '8px',
    marginBottom: '8px',
});

export const CustomTableCell = styled(TableCell)({
    border: 'none',
    padding: '8px 16px',
    fontSize: '14px',
    verticalAlign: 'top',
});