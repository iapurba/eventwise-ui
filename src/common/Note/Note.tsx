import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Note = styled(Typography)(() => ({
    color: 'red',
    padding: '8px 12px',
    borderRadius: '8px',
    background: '#fff8e1',
    lineHeight: '16px',
    marginBottom: '18px',
    fontSize: '12px',
    fontWeight: '500',
}));

export default Note;