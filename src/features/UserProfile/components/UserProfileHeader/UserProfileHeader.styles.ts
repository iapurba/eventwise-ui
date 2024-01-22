import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ProfileHeaderWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    color: '#FFFFFF',
    backgroundColor: '#0C172f',
    padding: '24px',
});

const ProfileHeaderContent = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    width: '100%',
});

export { ProfileHeaderWrapper, ProfileHeaderContent };