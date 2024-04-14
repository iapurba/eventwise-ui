import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import RequestOtpForm from '../components/OTPLogin/Forms/RequestOtpForm';
import VerifyOtpForm from '../components/OTPLogin/Forms/VerifyOtpForm';
import LoginButton from '../components/LoginButton/LoginButton';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const ModalContent = styled('div')({
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '3.5vw',
    maxWidth: '550px',
});

const CloseButton = styled('div')({
    position: 'absolute',
    top: '16px',
    right: '16px',
    cursor: 'pointer',
});

const ArrowButton = styled('div')({
    position: 'absolute',
    top: '16px',
    left: '16px',
    cursor: 'pointer',
});

interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
    const [email, setEmail] = useState<string>('');
    const [showLoginOption, setShowLoginOption] = useState<boolean>(true);
    const [showRequestOtp, setShowRequestOtp] = useState<boolean>(true);

    const handleRequestOtpSuccess = (email: string) => {
        setEmail(email)
        setShowRequestOtp(false);
    };

    const handleVerifyOtpSuccess = () => {
        handleClose();
    };

    const handleEmailOptionClick = () => {
        setShowLoginOption(false);

    };

    const handleClose = () => {
        setShowLoginOption(true);
        setShowRequestOtp(true);
        onClose();
    };

    return (
        <StyledModal open={open} onClose={handleClose}>
            <ModalContent sx={{ position: 'relative' }}>
                {
                    !showLoginOption && showRequestOtp &&
                    <ArrowButton onClick={() => setShowLoginOption(true)}>
                        <ArrowBackIcon />
                    </ArrowButton>
                }
                <CloseButton onClick={handleClose}><CloseIcon /></CloseButton>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    margin: '0 22px',
                }}>
                    {showLoginOption ? (
                        <>
                            <Typography variant='h6' fontWeight='bold'>Hey There!</Typography>
                            <Typography variant='subtitle1'>
                                Sign in to purchase tickets, save your favourite events, watch online shows, and much more.
                            </Typography>
                        </>
                    ) : (showRequestOtp ? (
                        <>
                            <Typography variant='h6' fontWeight='bold'>Enter your email address below</Typography>
                            <Typography variant='subtitle1'>
                                We'll create an account if you don't have one already.
                            </Typography>
                        </>

                    ) : (
                        <>
                            <Typography variant='h6' fontWeight='bold'>Enter OTP</Typography>
                            <Typography variant='subtitle1'>
                                {`Please enter the 6 digit OTP we have sent you via email on ${email}.`}
                            </Typography>
                        </>
                    ))}
                </Box>
                {showLoginOption ? (
                    <Box component="div" sx={{ margin: '25px 70px' }}>
                        <LoginButton
                            method='google'
                            variant='outlined'
                            label='Sign in with Google'
                        />
                        <LoginButton
                            method='apple'
                            variant='outlined'
                            label='Sign in with Apple'
                        />
                        <LoginButton
                            method='email'
                            variant='outlined'
                            label='Enter your email address'
                            onClick={handleEmailOptionClick}
                        />
                    </Box>
                ) : (
                    <Box component="div" sx={{ margin: '25px 50px' }}>
                        {showRequestOtp
                            ? <RequestOtpForm onSuccess={handleRequestOtpSuccess} />
                            : <VerifyOtpForm email={email} onSuccess={handleVerifyOtpSuccess} />
                        }
                    </Box>
                )}
            </ModalContent>
        </StyledModal>
    );
};

export default LoginModal;