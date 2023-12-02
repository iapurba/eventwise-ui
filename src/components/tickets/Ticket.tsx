import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TicketQtySelect from './forms/TicketQtySelect';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import ErrorTypography from '../common/Typography/ErrorTypography';

const BuyButton = styled(Button)(({ theme }) => ({
    padding: '6px 24px',
    marginTop: theme.spacing(1),
    backgroundColor: '#3695D8',
    borderRadius: '2px',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: '#3695D8',
    }
}));

const StyledBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
}));

const TicketWrapper = styled(Box)(() => ({
    borderBottom: '1px solid rgb(225, 227, 230)',
}));

const customTextSx = {
    fontSize: '16px',
    marginTop: '8px',
    fontStyle: 'italic',
    textAlign: 'right'
};

interface TicketProps {
    ticketDetails: {
        type: string;
        description: string;
        price: number;
        maxOrderQty: number;
        isAvailable: boolean;
        extraInfo?: string;
    };
    onQunatityChange: (newQuantity: number) => void;
    onBuyClick: (ticketData: any) => void;
};

const Ticket: React.FC<TicketProps> = ({ ticketDetails, onQunatityChange, onBuyClick }) => {
    const { type, description, price, maxOrderQty, isAvailable, extraInfo } = ticketDetails;
    const [quantity, setQuantity] = useState<number>(0);
    const [isBuyClicked, setIsBuyClicked] = useState<boolean>(false);

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
        onQunatityChange(newQuantity);
    };

    const handleBuyClickChild = () => {
        console.log('handle buy click');
        setIsBuyClicked(true);
        if (quantity) {
            onBuyClick({
                type,
                price,
                quantity,
                subTotal: quantity * price
            });
        };
    };

    return (
        <TicketWrapper>
            <Grid container spacing={2} p={3}>
                <Grid item xs={12} md={8}>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <Typography variant="h6">{type}</Typography>
                        {extraInfo &&
                            <Chip
                                label={extraInfo}
                                size="small"
                                sx={{ background: '#F9E79F' }}
                            />
                        }
                    </Stack>
                    <Typography variant="body2" mt={1}>{description}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    {isAvailable ?
                        <>
                            <StyledBox mb={1}>
                                <Typography variant="subtitle1">₹ {` ${price} × `}</Typography>
                                {/* Select Dropdown */}
                                <TicketQtySelect
                                    maxQty={maxOrderQty}
                                    onValueChange={handleQuantityChange}
                                />
                            </StyledBox>
                            <StyledBox>
                                <BuyButton
                                    variant="contained"
                                    onClick={handleBuyClickChild}
                                >
                                    Buy
                                </BuyButton>
                            </StyledBox>

                            {quantity ?
                                (<Typography sx={customTextSx}>
                                    Total: ₹ {price * quantity}
                                </Typography>
                                ) : (isBuyClicked && (
                                    <ErrorTypography sx={customTextSx}>
                                        Please select number of tickets
                                    </ErrorTypography>
                                ))}
                        </>
                        : (
                            <StyledBox>
                                <Button variant="contained" disabled>SOLD OUT</Button>
                            </StyledBox>
                        )}
                </Grid>
            </Grid>
        </TicketWrapper>
    );
};

export default Ticket;