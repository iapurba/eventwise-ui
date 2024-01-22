import { Typography } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface EventCardFooterWrapperProps extends BoxProps {
    type?: string;
}

export const EventCardFooterWrapper = styled(Box)<EventCardFooterWrapperProps>(
    ({ theme, type }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: type === 'physical' ? '#F5FCFE' : '#FEF3F7',
        padding: '9px',
        fontWeight: 'bold',
        borderRadius: theme.shape.borderRadius,
        alignItems: 'center',
        width: '100%',
        fontFamily: 'Inter, sans-serif',
    })
);

export const FooterText = styled(Typography)({
    fontFamily: 'roboto condensed, sans-serif',
    fontSize: '15px',
    fontWeight: 520,
    textTransform: 'uppercase',
});