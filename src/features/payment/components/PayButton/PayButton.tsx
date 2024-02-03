import { ReactNode } from 'react';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import PayButtonWrapper from './PayButton.styles';


interface PayButtonProps {
    label: ReactNode;
    onClick?: () => void;
}
const PayButton: React.FC<PayButtonProps> = ({ label, onClick }) => {
    return (
        <PayButtonWrapper
            className='pay-button'
            startIcon={<GppGoodRoundedIcon />}
            onClick={onClick}
        >
            {label}
        </PayButtonWrapper>
    );
};

export default PayButton;