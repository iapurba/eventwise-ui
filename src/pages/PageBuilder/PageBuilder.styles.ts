import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const PageWrapper = styled(Container)(() => ({
    padding: '32px 16px',
    maxHeight: '600px',
}));

export const PageHeaderWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0px auto',
}));

export const PageHeaderText = styled(Typography)(() => ({
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#00B9F5',
    fontVariant: 'h5',
}));