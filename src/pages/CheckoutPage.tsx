import CheckoutContainer from '../features/Checkout/containers/CheckoutContainer';
import PaymentMethodContainer from '../features/Payment/containers/PaymentMethodContainer';
import PageBuilder from './PageBuilder/PageBuilder';


const CheckoutPage = () => {
    return (
        <PageBuilder
            id='checkout-page'
            title='Confirm your cart details and pay'
        >
            <CheckoutContainer />
            <PaymentMethodContainer />
        </PageBuilder>
    );
};

export default CheckoutPage;