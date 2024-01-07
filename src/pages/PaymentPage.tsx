import PageWrapper from "../components/common/wrappers/PageWrapper"
// import PaymentFailure from "../components/payments/PaymentFailure";
import PaymentSuccess from "../features/payment/components/PaymentSuccess";

const PaymentPage = () => {
    return (
        <PageWrapper id='payment-page'>
            <PaymentSuccess/>
            {/* <PaymentFailure/> */}
        </PageWrapper>
    );
};

export default PaymentPage;