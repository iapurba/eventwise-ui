import { ButtonProps } from '@mui/material';
import { ContainedLoginBtnWrapper, 
    OutlinedLoginBtnWrapper } from './LoginButton.styles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';


interface LoginButtonProps extends ButtonProps {
    method: 'email' | 'google' | 'apple';
    variant?: 'contained' | 'outlined';
    label: string;
    onClick?: () => void;
}

const LoginButton = ({
    method,
    variant = 'contained',
    label,
    onClick,
}: LoginButtonProps) => {
    switch (method) {
        case 'email':
            return (
                <OutlinedLoginBtnWrapper
                    startIcon={<MailOutlineIcon />}
                    onClick={onClick}
                >
                    {label}
                </OutlinedLoginBtnWrapper>
            );
        case 'google':
            return (
                variant === 'outlined' ? (
                    <OutlinedLoginBtnWrapper
                        className='btn btn-login btn-google'
                        startIcon={<GoogleIcon />}
                        onClick={onClick}
                    >
                        {label}
                    </OutlinedLoginBtnWrapper>
                ) : (
                    <ContainedLoginBtnWrapper
                        className='btn btn-login btn-google btn-google-contained'
                        startIcon={<GoogleIcon />}
                        onClick={onClick}
                    >
                        {label}
                    </ContainedLoginBtnWrapper>
                )
            );
        case 'apple':
            return (
                variant === 'outlined' ? (
                    <OutlinedLoginBtnWrapper
                        className='btn btn-login btn-apple'
                        startIcon={<AppleIcon />}
                        onClick={onClick}
                    >
                        {label}
                    </OutlinedLoginBtnWrapper>
                ) : (
                    <ContainedLoginBtnWrapper
                        className='btn btn-login btn-apple btn-apple-contained'
                        startIcon={<AppleIcon />}
                        onClick={onClick}
                    >
                        {label}
                    </ContainedLoginBtnWrapper>
                )
            );
    }
};

export default LoginButton;