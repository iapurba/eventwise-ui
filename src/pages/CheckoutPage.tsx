import Container from '@mui/material/Container';
import PageTitleTypography from '../components/common/Typography/PageTitleTypography';
import CheckoutContainer from '../containers/checkout/CheckoutContainer';
import PageTitleWrapper from '../components/common/Wrappers/PageTitleWapper';



const CheckoutPage = () => {
    return (
        <Container>
            <PageTitleWrapper>
                <PageTitleTypography gutterBottom >
                    {'Confirm your cart details and pay'}
                </PageTitleTypography>
            </PageTitleWrapper>
            <CheckoutContainer />
        </Container>

    );
};

export default CheckoutPage;