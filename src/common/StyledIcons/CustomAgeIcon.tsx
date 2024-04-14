import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const CustomIcon = styled(Typography)(() => ({
    border: '1.6px solid #45474D',
    color: '#45474D',
    borderRadius: '2px',
    padding: '3px 5px',
    fontSize: '10px',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontFamily: 'Roboto Condensed',
}));

const CustomAgeIcon = () => {
    return (<CustomIcon>UA</CustomIcon>);
};

export default CustomAgeIcon;