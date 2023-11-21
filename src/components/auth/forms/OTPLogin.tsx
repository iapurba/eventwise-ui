import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StyledTextField from '../../common/StyledTextField';
import StyledButton from '../../common/StyledButton';
import { Fragment, useState } from 'react';


const OTPLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [otp, setOtp] = useState<string>('');
    const [step, setStep] = useState<number>(1);

    const handleContinue = () => {
        if (email) {
            setStep(2);
        }
    };

    const handleLogin = () => {
        console.log('login success')
    }

    return (
        <Box display="flex" flexDirection="column" pb={1}>
            {
                step === 1 ? (
                    <Fragment>
                        <Typography variant="h5" fontWeight="bold" fontSize="26px">Enter your email address</Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{ color: '#676465', fontSize: '12px' }}
                        >
                            {`If you don't have an account yet, we'll create one for you`}
                        </Typography>
                        <StyledTextField
                            required
                            fullWidth
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            placeholder="Email Address"
                            sx={{ mt: 1 }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <StyledButton sx={{ mt: 2 }} onClick={handleContinue}>
                            CONTINUE
                        </StyledButton>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Typography variant="h5" fontWeight="bold" fontSize="26px">Enter OTP</Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{ color: '#676465', fontSize: '12px' }}
                        >
                            {`Please enter the 6 digit OTP we have sent you via email on ${email}.`}
                        </Typography>
                        <StyledTextField
                            required
                            fullWidth
                            id="otp"
                            name="otp"
                            type="text"
                            value={otp}
                            placeholder="6 Digit Otp"
                            sx={{ mt: 1 }}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <StyledButton sx={{ mt: 2 }} onClick={handleLogin}>
                            Log in
                        </StyledButton>
                    </Fragment>
                )

            }

        </Box>
    );
};

export default OTPLogin;