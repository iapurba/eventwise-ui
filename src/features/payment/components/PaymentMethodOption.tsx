import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import PaymentContentWrapper from '../../../components/common/wrappers/PaymentContentWrapper';

const CustomIconButton = styled(IconButton)(() => ({
    '&:hover': {
        background: 'none',
    }
}));

interface PaymentMethodOptionProps {
    svgImage: React.ReactElement;
    methodName: string;
    children: React.ReactNode;
}

const PaymentMethodOption: React.FC<PaymentMethodOptionProps> = ({ svgImage, methodName, children }) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <PaymentContentWrapper className='payment-method-option'>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {svgImage}
                        <Typography variant="h6" component="div" sx={{ marginLeft: 2, fontWeight: 'bold'}}>
                            {methodName}
                        </Typography>
                    </Box>
                    <CustomIconButton
                        onClick={handleToggleExpand}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        {expanded
                            ? <ExpandLessRoundedIcon />
                            : <ExpandMoreIcon />}
                    </CustomIconButton>
                </Box>
                <Collapse in={expanded} timeout="auto" unmountOnExit sx={{p:'10px'}}>
                    {children}
                </Collapse>
        </PaymentContentWrapper>
    );
};

export default PaymentMethodOption;
