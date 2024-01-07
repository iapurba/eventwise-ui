import PageHeaderText from '../components/common/Typography/PageHeaderText';
import CheckoutContainer from '../features/checkout/containers/CheckoutContainer';
import PageHeaderWrapper from '../components/common/wrappers/PageHeaderWrapper';
import PageWrapper from '../components/common/wrappers/PageWrapper';
import PaymentMethodContainer from '../features/payment/containers/PaymentMethodContainer';


const CheckoutPage = () => {
    return (
        <PageWrapper id='checkout-page'>
            <PageHeaderWrapper pb={3}>
                <PageHeaderText>
                    {'Confirm your cart details and pay'}
                </PageHeaderText>
            </PageHeaderWrapper>
            {/* <CheckoutContainer /> */}
            <PaymentMethodContainer/>
        </PageWrapper>
    );
};

export default CheckoutPage;