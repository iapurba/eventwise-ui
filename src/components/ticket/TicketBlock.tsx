import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Divider } from '@mui/material';
import CustomSelect from '../common/CustomSelect';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

interface TicketBlockProps {
    ticketType: string;
    description: string;
    price: number;
    available: number;
};

const TicketBlock: React.FC<TicketBlockProps> = (props) => {

    const { ticketType, description, price, available } = props;

    // const [selectedQty, setSelectedQty] = useState<number>(0);

    return (
        <>
            <Grid container spacing={2} p={3}>
                <Grid item xs={12} md={9}>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <Typography variant="h6" gutterBottom >{ticketType}</Typography>
                        <Chip label="Few Tickets Left" size="small" />
                    </Stack>
                    <Typography variant="body2" mt={1}>{description}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    {available ?
                        <>
                            <Box display="flex" alignItems="center" mb={1} sx={{ justifyContent: 'flex-end' }}>
                                <Typography variant="subtitle1">₹ {` ${price} × `}</Typography>
                                <CustomSelect />
                            </Box>
                            <Box display="flex" alignItems="center" mb={0} sx={{ justifyContent: 'flex-end' }}>
                                <Link to={'/buy/checkout'}>
                                    <Button
                                        sx={{ 
                                            pl: 3, pr: 3, mt: 1, 
                                            background: '#3695D8',
                                            borderRadius: '2px'
                                        }}
                                        variant="contained"
                                    >
                                        Buy
                                    </Button>
                                </Link>
                            </Box>
                            {2 > 0 && (
                                <Typography variant="subtitle1" mt={1} sx={{ fontStyle: 'italic', textAlign: 'right' }}>
                                    Total: ₹ {5000}
                                </Typography>
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

export default TicketBlock;