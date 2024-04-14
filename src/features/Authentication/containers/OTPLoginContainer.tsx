import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import RequestOtpForm from '../components/OTPLogin/Forms/RequestOtpForm';
import VerifyOtpForm from '../components/OTPLogin/Forms/VerifyOtpForm';

interface OTPLoginContainerProps {
    onLoginSuccess: () => void;
}

const OTPLoginContainer: React.FC<OTPLoginContainerProps> = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState<string>('');
    const [showRequestOtp, setShowRequestOtp] = useState<boolean>(true);

    const handleRequestOtpSuccess = (email: string) => {
        setEmail(email);
        setShowRequestOtp(false);
    };

    return (
        <Box display="flex" flexDirection="column" pb={1}>
            {showRequestOtp ? (
                <Box>
                    <Typography variant="h5" fontWeight="bold" fontSize="26px">Enter your email address</Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{ color: '#676465', fontSize: '12px' }}
                    >
                        {`If you don't have an account yet, we'll create one for you`}
                    </Typography>
                    <RequestOtpForm onSuccess={handleRequestOtpSuccess} />
                </Box>
            ) : (
                <Box>
                    <Typography variant="h5" fontWeight="bold" fontSize="26px">Enter OTP</Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{ color: '#676465', fontSize: '12px' }}
                    >
                        {`Please enter the 6 digit OTP we have sent you via email on ${email}.`}
                    </Typography>
                    <VerifyOtpForm email={email} onSuccess={onLoginSuccess} />
                    <Typography
                        variant="subtitle2"
                        sx={{ color: '#676465', fontSize: '12px', mt: 2 }}
                    >
                        {`Please check Spam folder if you could not find OTP in your email inbox.`}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default OTPLoginContainer;