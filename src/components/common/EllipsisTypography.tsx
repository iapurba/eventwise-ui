import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const EllipsisTypography = styled(Typography)(({ theme }) => ({
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: '#202226',
    fontWeight: 'bold',
    fontSize: '18px',
    fontFamily: 'Inter, sans-serif',
}));

export default EllipsisTypography;