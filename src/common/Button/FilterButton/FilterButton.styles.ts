import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export interface FilterMenuButtonProps {
    isActive: boolean;
    onClick?: () => void;
}

const RounderFilterButtonWrapper = styled(Button)<FilterMenuButtonProps>(
    ({ isActive }) => ({
        borderRadius: '100px',
        color: isActive ? '#FFFFFF' : '#000000',
        padding: '7px 15px',
        border: isActive ? '#C20000' : '1px solid rgb(153, 153, 153)',
        fontSize: '14px',
        marginLeft: '12px',
        textTransform: 'initial',
        backgroundColor: isActive ? '#C20000' : 'transparent',
        '&:hover': {
            borderColor: isActive ? '#C20000' : '1px solid rgb(153, 153, 153)',
            backgroundColor: isActive ? '#C20000' : 'transparent',
        },
    }));

export { RounderFilterButtonWrapper };