import { Typography, styled } from '@mui/material';

const EventOverviewHeader = styled(Typography)({
    borderBottom: '2px solid #0D0F13',
    width: 'fit-content',
    fontSize: '21px',
    fontWeight: 'bold',
    padding: '3px 0',
    marginTop: '24px',
});

const BulletMark = styled('span')({
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: '#000000',
    display: 'inline-block',
    marginRight: '8px',
    verticalAlign: 'middle',
});

export { EventOverviewHeader, BulletMark };