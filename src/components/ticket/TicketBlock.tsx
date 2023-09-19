import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Divider } from '@mui/material';
import CustomSelect from '../common/CustomSelect';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface TicketBlockProps {
    ticketType: string;
    description: string;
    price: number;
    available: number;
};

const TicketBlock = ({ ticketType, description, price, available }: TicketBlockProps) => {

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
                                <Typography variant="subtitle1"><span>&#8377;</span>{` ${price} × `}</Typography>
                                <CustomSelect />
                            </Box>
                            <Box display="flex" alignItems="center" mb={1} sx={{ justifyContent: 'flex-end' }}>
                                <Button
                                    sx={{ pl: 4, pr: 4, mt: 1 }}
                                    variant="contained"
                                    color="primary"
                                    onClick={() => alert(`You bought ${2} item(s) for Rs ${5000}`)}
                                >
                                    Buy
                                </Button>
                            </Box>
                            {2 > 0 && (
                                <Typography variant="subtitle1" mt={1} sx={{ fontStyle: 'italic', textAlign: 'right' }}>Total: <span>&#8377;</span> {5000}</Typography>
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