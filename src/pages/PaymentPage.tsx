// import PaymentFailure from "../components/payments/PaymentFailure";
import PaymentSuccess from "../features/Payment/components/PaymentSuccess";
import PageBuilder from "./PageBuilder/PageBuilder";

const PaymentPage = () => {
    return (
        <PageBuilder id='payment-page'>
            <PaymentSuccess/>
            {/* <PaymentFailure/> */}
        </PageBuilder>
    );
};

export default PaymentPage;