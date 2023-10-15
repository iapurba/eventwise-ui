import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoginContainer from './LoginContainer';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TicketDetailsForm from '../components/forms/TicketDetailsForm';
import OrderSummaryContainer from './OrderSummaryContainer';
import StyledButton from '../components/common/StyledButton';
import { useState } from 'react';
import { StyledAddIcon, StyledRemoveIcon } from '../components/common/StyledIcons';
import { styled } from '@mui/material/styles';

const gridStyle = {
    justifyContent: 'center',
    maxWidth: '800px',
    margin: 'auto',
};

const StyledBox = styled(Box)(({ theme }) => ({
    borderBottom: '1px dashed #D0D0D0',
    paddingBottom: theme.spacing(4),
    marginBottom: theme.spacing(2)
}));


const CheckoutContainer = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
    const [loginExpanded, setLoginExpanded] = useState<boolean>(false);
    const [orderSummaryExpanded, setOrderSummaryExpanded] = useState<boolean>(true);
    const [ticketDetailsExpanded, setTicketDetailsExpanded] = useState<boolean>(false);
    const isLoggedIn = true;

    const handleLoginExpand = () => {
        setLoginExpanded(true)
        setOrderSummaryExpanded(false)
        setTicketDetailsExpanded(false)
    };

    const handleOrderSummaryExpanded = () => {
        setLoginExpanded(false)
        setOrderSummaryExpanded(true)
        setTicketDetailsExpanded(false)
    };

    const handlerTicketDetailsExpanded = () => {
        setLoginExpanded(false)
        setOrderSummaryExpanded(false)
        setTicketDetailsExpanded(true)
    };

    return (
        <Grid container sx={gridStyle} flexDirection="column">
            {isLoggedIn
                ? (
                    <Grid item>
                        <Divider />
                        <div onClick={handleLoginExpand}>
                            <Box
                                p={2}
                                display="flex"
                                flexDirection="row"
                                justifyContent="space-between"
                                sx={{ cursor: 'pointer' }}
                            >
                                <Box display="flex" alignItems="center">
                                    {loginExpanded ? <StyledRemoveIcon /> : <StyledAddIcon />}
                                    &nbsp;
                                    <Typography variant='body2' fontWeight="bold">
                                        STEP 1: LOGGED IN AS:
                                    </Typography>
                                </Box>
                                {!loginExpanded && (
                                    <Typography variant='body2'>
                                        apurbapanja1@gmail.com
                                    </Typography>
                                )}
                            </Box>
                        </div>
                        {loginExpanded &&
                            <Box sx={{ padding: '8px 16px 40px 24px' }}>
                                <Typography variant="h6"
                                    fontWeight="bold"
                                    fontSize="19px"
                                >
                                    {'apurbapanja1@gmail.com '}
                                    <span style={{ color: '#29BCFF', cursor: 'pointer' }}>
                                        {'(sign out)'}
                                    </span>
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: '#676465', fontSize: '12px' }}
                                >
                                    {`Please note you won't lose the items in your cart if you sign out.`}
                                </Typography>
                                <Box pt={2}>
                                    <StyledButton onClick={handleOrderSummaryExpanded}>CONTINUE</StyledButton>
                                </Box>
                            </Box>
                        }

                    </Grid>
                ) : (
                    <Grid item>
                        <Divider />
                        <Box flexDirection="column" p={2}>
                            <Box display="flex" alignItems="center">
                                <StyledRemoveIcon /> &nbsp;
                                <Typography variant='body2' fontWeight="bold">
                                    STEP 1: LOGIN/REGISTER:
                                </Typography>
                            </Box>
                            <Box pt={1}>
                                <LoginContainer />
                            </Box>
                        </Box>
                    </Grid>
                )}
            <Grid item>
                <Divider />
                <div onClick={handleOrderSummaryExpanded}>
                    <Box
                        p={2}
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        sx={{ cursor: 'pointer' }}
                    >
                        <Box display="flex" alignItems="center">
                            {orderSummaryExpanded ? <StyledRemoveIcon /> : <StyledAddIcon />}
                            &nbsp;
                            <Typography variant='body2' fontWeight="bold">
                                STEP 2: ORDER SUMMARY:
                            </Typography>
                        </Box>
                        {!orderSummaryExpanded && (
                            <Typography variant='body2'>
                                Items: 1 &nbsp;•&nbsp;Total: ₹1200.00
                            </Typography>
                        )}
                    </Box>
                </div>
                {orderSummaryExpanded && (
                    <Box sx={{ padding: '8px 16px 40px 24px' }}>
                        <OrderSummaryContainer />
                        <Box pt={1} display="flex" justifyContent="center">
                            <StyledButton onClick={handlerTicketDetailsExpanded}>CONTINUE</StyledButton>
                        </Box>
                    </Box>
                )}
            </Grid>
            <Grid item>
                <Divider />
                <div onClick={handlerTicketDetailsExpanded}>
                    <Box
                        p={2}
                        display="flex"
                        flexDirection="row"
                        sx={{ cursor: 'pointer' }}
                    >
                        <Box display="flex" alignItems="center">
                            {ticketDetailsExpanded ? <StyledRemoveIcon /> : <StyledAddIcon />}
                            &nbsp;
                            <Typography variant='body2' fontWeight="bold">
                                STEP 3: TICKET DETAILS:
                            </Typography>
                        </Box>
                    </Box>
                </div>
                {ticketDetailsExpanded && (
                    <Box sx={{ padding: '8px 16px 40px 24px' }}>
                        <StyledBox>
                            <TicketDetailsForm />
                        </StyledBox>
                        <Box pt={2} display="flex" justifyContent="center">
                            <StyledButton>CONTINUE</StyledButton>
                        </Box>
                    </Box>
                )}
            </Grid>

        </Grid>
    );
};

export default CheckoutContainer;