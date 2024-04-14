import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

const AppHeaderWrapper = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#0C172F',
    color: '#FFFFFF',
    padding: theme.spacing(0, 2),
    position: 'static',
}));

const AppHeaderContentWrapper = styled('div')({
    display: 'flex', 
    flexDirection: 'row' 
})

export { AppHeaderWrapper, AppHeaderContentWrapper};
