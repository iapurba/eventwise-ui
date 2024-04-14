import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const EventBasicInfoWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0px auto',
});

const EventTitleText = styled(Typography)({
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#00B9F5',
    fontVariant: 'h5',
});

const BulletMark = styled('span')({
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#000000',
    display: 'inline-block',
    margin: '0 8px',
    verticalAlign: 'middle',
});

export { EventBasicInfoWrapper, EventTitleText, BulletMark};