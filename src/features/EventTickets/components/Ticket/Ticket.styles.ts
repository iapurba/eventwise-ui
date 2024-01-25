import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const TicketWrapper = styled(Box)({
    borderBottom: '1px solid rgb(225, 227, 230)',
});

const TicketContentWrapper = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
});

const customTextSx = {
    fontSize: '16px',
    marginTop: '8px',
    fontStyle: 'italic',
    textAlign: 'right'
};

export { TicketWrapper, TicketContentWrapper, customTextSx};



