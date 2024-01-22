import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const IconOnlyButtonWrapper = styled(IconButton)({
    border: '1px solid rgba(255,255,255,0.2)',
    fontSize: '13px',
    padding: '7px',
    borderRadius: '100px',
    backgroundColor: 'transparent',
    color: 'white',
    marginLeft: '15px',
    '&:hover': {
        borderColor: 'white',
        backgroundColor: 'transparent',
    }
});

const IconTextButtonWrapper = styled(Button)({
    borderRadius: '100px',
    color: 'white',
    padding: '7px 15px',
    border: '1px solid rgba(255,255,255,0.2)',
    fontWeight: '600',
    fontSize: '13px',
    marginLeft: '15px',
    textTransform: 'initial',
    '&:hover': {
        borderColor: 'white',
        backgroundColor: 'transparent',
    }
});

export { IconOnlyButtonWrapper, IconTextButtonWrapper };