import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [carts] = useCart()
    const totalPrice = carts.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(totalPrice.toFixed(2))
    return (
        <div className="w-full">
            <SectionTitle heading="Please Procced" subHeading="Payment"></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm carts = {carts} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;