import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ContainedLoginBtnWrapper = styled(Button)(
    ({ className }) => ({
        borderRadius: '2px',
        marginTop: '16px',
        textTransform: 'uppercase',
        padding: '8px 20px',
        color: '#FFFFFF',
        backgroundColor: className?.includes('btn-google-contained') 
        ?'rgba(219, 68, 55, .9)' : 'rgba(0, 0, 0, .8)',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: className?.includes('btn-google-contained') 
            ?'rgba(219, 68, 55, 1)' : 'rgba(0, 0, 0, .9)',
        },
    }));

const OutlinedLoginBtnWrapper = styled(Button)({
    marginTop: '16px',
    borderRadius: '6px',
    color: 'inherit',
    variant: 'outlined',
    padding: '12px 18px',
    border: '1px solid rgb(221, 223, 226)',
    fontSize: '15px',
    textTransform: 'initial',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    '&:hover': {
        border: '1px solid rgb(221, 223, 226)',
        backgroundColor: 'whitesmoke',
    }

});

export { OutlinedLoginBtnWrapper, ContainedLoginBtnWrapper };