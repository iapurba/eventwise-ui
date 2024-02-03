import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import PaymentMethodOptionWrapper, { CustomIconButton } from './PaymentMethodOption.styles';


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
        <PaymentMethodOptionWrapper className='payment-method-option'>
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
        </PaymentMethodOptionWrapper>
    );
};

export default PaymentMethodOption;
