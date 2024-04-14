import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const FilterPanelWrapper = styled(Box)(() => ({
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1vw 0 0',
}));

export const FilterOptionsWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '80%',
}));

export const ScrollableOptions = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    overflowX: 'auto',
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE
    '&::-webkit-scrollbar': {
        display: 'none', // Chrome, Safari, Edge
    },
    '& > button': {
        whiteSpace: 'nowrap',
        flexShrink: 0,
    },
    overflow: 'hidden', // Disable keyboard and touchpad scroll
    WebkitOverflowScrolling: 'touch', // For iOS devices
});