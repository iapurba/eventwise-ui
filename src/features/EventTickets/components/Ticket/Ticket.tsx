import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TicketQtySelect from './Forms/TicketQtySelect';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import ErrorTypography from '../../../../components/common/Typography/ErrorTypography';
import { TicketContentWrapper, TicketWrapper, customTextSx } from './Ticket.styles';
import TicketButton from '../../../../common/Button/TicketButton/TicketButton';

interface TicketProps {
    ticketDetails: {
        ticketType: string;
        description: string;
        price: number;
        priceDisplayString: string;
        maxOrderQty: number;
        isAvailable: boolean;
        extraInfo?: string;
    };
    onQunatityChange: (newQuantity: number) => void;
    onBuyClick: (ticketData: any) => void;
};

const Ticket: React.FC<TicketProps> = ({
    ticketDetails,
    onQunatityChange,
    onBuyClick
}) => {
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
                ticketType: ticketDetails?.ticketType,
                price: ticketDetails?.price,
                quantity,
                subTotal: quantity * ticketDetails?.price
            });
        };
    };

    return (
        <TicketWrapper className='event-ticket'>
            <Grid container spacing={2} p={3}>
                <Grid item xs={12} md={8}>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <Typography variant="h6">
                            {ticketDetails?.ticketType}
                        </Typography>
                        {ticketDetails?.extraInfo &&
                            <Chip
                                label={ticketDetails?.extraInfo}
                                size="small"
                                sx={{ color: '#F05B2B', background: '#FDEFEA' }}
                            />
                        }
                    </Stack>
                    <Typography variant="body2" mt={1}>
                        {ticketDetails?.description}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    {ticketDetails?.isAvailable ?
                        <>
                            <TicketContentWrapper mb={1}>
                                <Typography variant="subtitle1">{`${ticketDetails?.priceDisplayString} × `}</Typography>
                                {/* Select Dropdown */}
                                <TicketQtySelect
                                    maxQty={ticketDetails?.maxOrderQty}
                                    onValueChange={handleQuantityChange}
                                />
                            </TicketContentWrapper>
                            <TicketContentWrapper>
                                <TicketButton
                                    label='Buy'
                                    onClick={handleBuyClickChild}
                                />
                            </TicketContentWrapper>

                            {quantity ?
                                (<Typography sx={customTextSx}>
                                    Total: ₹ {ticketDetails?.price * quantity}
                                </Typography>
                                ) : (isBuyClicked && (
                                    <ErrorTypography sx={customTextSx}>
                                        Please select number of tickets
                                    </ErrorTypography>
                                ))}
                        </>
                        : (
                            <TicketContentWrapper>
                                <TicketButton
                                    label='Sold Out'
                                    disabled={true}
                                />
                            </TicketContentWrapper>
                        )}
                </Grid>
            </Grid>
        </TicketWrapper>
    );
};

export default Ticket;