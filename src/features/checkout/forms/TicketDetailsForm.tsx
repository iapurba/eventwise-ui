import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#D0D0D0',
            borderRadius: 0,
        },
        '&:hover fieldset': {
            borderColor: '#D0D0D0',
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
    },
}));

const TicketDetailsForm = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <StyledTextField
                            fullWidth
                            id="fullname"
                            name="fullname"
                            type="text"
                            placeholder="Name*"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} />

                    <Grid item xs={12} sm={6}>
                        <StyledTextField
                            fullWidth
                            id="mobile"
                            name="mobile"
                            type="text"
                            placeholder="Mobile Number"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} />

                    <Grid item xs={12} sm={6}>
                        <StyledTextField
                            fullWidth
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email*"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel htmlFor="email">
                            This email address will receive the e-tickets.
                        </InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StyledTextField
                            required
                            name="pincode"
                            fullWidth
                            id="pincode"
                            type="text"
                            placeholder="Pincode*"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StyledTextField
                            required
                            fullWidth
                            id="state"
                            type="text"
                            placeholder="State*"
                            name="state"
                            size="small"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export default TicketDetailsForm;