import { ReactNode } from 'react';
import { Button, styled } from '@mui/material';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';

const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '12px 16px',
    margin: 'auto',
    width: '100%',
    whiteSpace: 'nowrap',
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    background: '#00B9F9',
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: '#00B9F9',
    },
}));

interface PayButtonProps {
    children: ReactNode;
    onClick?: () => void;
}
const PayButton: React.FC<PayButtonProps> = ({ children, onClick }) => {
    return (
        <StyledButton
            className='pay-button'
            startIcon={<GppGoodRoundedIcon />}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

export default PayButton;