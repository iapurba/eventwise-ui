import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const FilterPanelWrapper = styled(Box)(() => ({
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1vw 0 0',
}));

const FilterOptionsWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '80%',
}));

// const styleActive = {
//     color: '#FFFFFF',
//     border: '1px solid #C20000',
//     backgroundColor: '#C20000',
//     '&:hover': {
//         borderColor: '1px solid #C20000',
//         backgroundColor: '#C20000',
//     }
// }

const ScrollableOptions = styled(Box)({
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

export {
    FilterPanelWrapper,
    FilterOptionsWrapper,
    ScrollableOptions
};