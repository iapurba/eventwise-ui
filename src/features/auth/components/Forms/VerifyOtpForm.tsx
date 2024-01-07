import React, { useState, useRef, ChangeEvent, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import PrimaryButton from '../../../../components/common/Buttons/PrimaryButton';
import { loginUser } from '../../authSlice';
import { useDispatch } from 'react-redux';
import { useVerifyOtpMutation } from '../../authApi';
import Box from '@mui/material/Box';

const OTPDigitInput = styled(TextField)({
    margin: '0 5px',
    textAlign: 'center',
    '& input': {
        textAlign: 'center',
    },
});

interface VerifyOtpFormProps {
    email: string;
    onSuccess: () => void;
};

const VerifyOtpForm: React.FC<VerifyOtpFormProps> = ({ email, onSuccess }) => {
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([null, null, null, null, null, null]);

    const dispatch = useDispatch();

    const [verifyOtp] = useVerifyOtpMutation();

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        if (value.length > 1) {
            value = value.slice(0, 1);
        };

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to the next input field
        if (value !== '' && index < otp.length - 1) {
            inputRefs.current[index + 1]?.focus();
        };
    };

    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        // Move to the previous input field on backspace
        if (event.key === 'Backspace' && index > 0) {
            if (index === otp.length - 1) {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
            }
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await verifyOtp({ email, otp: otp.join('') });
            if ('data' in response) {
                dispatch(loginUser(response.data))
            } else {
                console.log('Error:', response.error);
            }
        } catch (error) {
            console.log('Error:', error);
        }
        onSuccess();
    }


    useEffect(() => {
        // Focus the first input field on page load
        inputRefs.current[0]?.focus();
    }, []);

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row">
                {otp.map((digit, index) => (
                    <OTPDigitInput
                        key={index}
                        inputRef={(el) => (inputRefs.current[index] = el)}
                        variant="outlined"
                        value={digit}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
                    />
                ))}
            </Box>
            <PrimaryButton
                fullWidth
                sx={{ mt: 2, p: 3, width: '100%' }}
                onClick={handleLogin}
                disabled={otp.join('').length !== 6}
            >
                Log in
            </PrimaryButton>
        </Box>
    );
};

export default VerifyOtpForm;
