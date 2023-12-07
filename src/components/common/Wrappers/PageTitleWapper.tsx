import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const PageTitleWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '32px auto',
}));

export default PageTitleWrapper;