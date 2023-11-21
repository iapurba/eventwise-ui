import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import OTPLogin from './forms/OTPLogin';
import OTPForm from './forms/OTPForm';

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

const ActionButton = styled(Button)({
    marginTop: '16px',
    borderRadius: '6px',
    color: 'inherit',
    padding: '12px 18px',
    border: '1px solid rgb(221, 223, 226)',
    fontSize: '15px',
    textTransform: 'initial',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    '&:hover': {
        border: '1px solid rgb(221, 223, 226)',
        backgroundColor: 'whitesmoke',
    }

});

interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
    const [email, setEmail] = useState('');

    const handleEmailSubmit = () => {
        // Handle email submission logic here
        console.log('Email submitted:', email);
    };

    return (
        <StyledModal open={open} onClose={onClose}>
            <ModalContent sx={{ position: 'relative' }}>
                <ArrowButton onClick={onClose}><ArrowBackIcon /></ArrowButton>
                <CloseButton onClick={onClose}><CloseIcon /></CloseButton>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    margin: '0 22px',
                }}>
                    <Typography variant='h6' fontWeight='bold'>Hey There!</Typography>
                    <Typography variant='subtitle1'>
                        Sign in to purchase tickets, save your favourite events, watch online shows, and much more.
                    </Typography>
                </Box>
                <Box sx={{
                    margin: '25px 70px'
                }}>
                    <ActionButton
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                    >
                        Sign in with Google
                    </ActionButton>

                    <ActionButton
                        variant="outlined"
                        startIcon={<AppleIcon />}
                    >
                        Sign in with Apple
                    </ActionButton>

                    <ActionButton
                        variant="outlined"
                        startIcon={<MailOutlineIcon />}
                    >
                        Enter your email address
                    </ActionButton>
                </Box>
                <OTPForm/>
            </ModalContent>
        </StyledModal>
    );
};

export default LoginModal;