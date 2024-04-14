import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const EllipsisTypography = styled(Typography)(({ theme }) => ({
    WebkitLineClamp: 2,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: '#202226',
    fontWeight: 'bold',
    fontSize: '18px',
    fontFamily: 'Inter, sans-serif',
}));

export default EllipsisTypography;