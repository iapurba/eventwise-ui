import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PageTitleTypogapgy from '../components/common/PageTitlteTypography';
import CheckoutContainer from '../containers/CheckoutContainer';


const CheckoutPage = () => {
    return (
        <Container>
            <Grid
                container
                display="flex"
                alignItems="center"
            >
                <Grid
                    item
                    sx={{
                        margin: '32px auto',
                        textAlign: 'center'
                    }}
                >
                    <PageTitleTypogapgy gutterBottom >
                        {'Confirm your cart details and pay'}
                    </PageTitleTypogapgy>
                </Grid>
            </Grid>
            <CheckoutContainer/>
        </Container>

    );
};

export default CheckoutPage;