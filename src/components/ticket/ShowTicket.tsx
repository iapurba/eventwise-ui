import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Divider } from '@mui/material';
import CustomSelect from '../common/CustomSelect';
// import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

interface ShowTicketProps {
    ticketType: string;
    description: string;
    price: number;
    maxOrderQty: number;
    isAvailable: boolean;
};

const ShowTicket: React.FC<ShowTicketProps> = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { ticketType, description, price, maxOrderQty, isAvailable } = props;

    const [selectedQty, setSelectedQty] = useState<number>(0);
    const [isBuyClicked, setIsBuyClicked] = useState<boolean>(false);

    const handleSelectQty = (quantity: number) => {
        console.log('handle sq ', selectedQty)
        setSelectedQty(quantity);
        console.log('handle sq ', selectedQty)
    }

    const handleBuyClick = () => {
        console.log('handle buy click');
        setIsBuyClicked(true);
        dispatch(addToCart({
            ticketType,
            price,
            selectedQty,
            subTotal: selectedQty * price
        }));
        
        if (selectedQty > 0) {
            navigate('/buy/checkout');
        }
    }

    return (
        <>
            <Grid container spacing={2} p={3}>
                <Grid item xs={12} md={9}>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <Typography variant="h6" gutterBottom >{ticketType}</Typography>
                        {/* <Chip label="Few Tickets Left" size="small" /> */}
                    </Stack>
                    <Typography variant="body2" mt={1}>{description}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    {isAvailable ?
                        <>
                            <Box display="flex" alignItems="center" mb={1} sx={{ justifyContent: 'flex-end' }}>
                                <Typography variant="subtitle1">₹ {` ${price} × `}</Typography>
                                {/* Select Dropdown */}
                                <CustomSelect
                                    maxQty={maxOrderQty}
                                    handleSelectQty={handleSelectQty}
                                />
                            </Box>
                            <Box display="flex" alignItems="center" mb={0} sx={{ justifyContent: 'flex-end' }}>
                                <Button
                                    sx={{
                                        pl: 3, pr: 3, mt: 1,
                                        background: '#3695D8',
                                        borderRadius: '2px'
                                    }}
                                    variant="contained"
                                    onClick={handleBuyClick}
                                >
                                    Buy
                                </Button>
                            </Box>

                            {selectedQty > 0 ?
                                (
                                    <Typography variant="subtitle1" mt={1} sx={{ fontStyle: 'italic', textAlign: 'right' }}>
                                        Total: ₹ {price * selectedQty}
                                    </Typography>
                                ) : (
                                    isBuyClicked && (
                                        <Typography variant="subtitle1" mt={1} sx={{ fontStyle: 'italic', textAlign: 'right', color: 'red' }}>
                                            Please select number of tickets
                                        </Typography>
                                    )
                                )}
                        </>
                        :
                        <Box display="flex" alignItems="center" mb={1} sx={{ justifyContent: 'flex-end' }}>
                            <Button
                                sx={{ pl: 4, pr: 4, mt: 1 }}
                                variant="contained"
                                disabled
                            >
                                SOLD OUT
                            </Button>
                        </Box>}
                </Grid>
            </Grid>
            <Divider />
        </>
    );
};

export default ShowTicket;