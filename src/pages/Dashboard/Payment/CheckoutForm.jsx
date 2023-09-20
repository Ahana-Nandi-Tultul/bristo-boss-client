import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({price}) => {
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [instance] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(()=> {
        instance.post('/create-payment-intent', {price})
        .then(res => {
            // console.log(res?.data?.clientSecret)
            setClientSecret(res?.data?.clientSecret)
        })
    }, [])

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        console.log(card)
        if (card == null) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setCardError(error.message);
          } else {
            setCardError('')
            // console.log('[PaymentMethod]', paymentMethod);
          }
          setProcessing(true)
          const {paymentIntent, confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'unKnown',
                  name: user?.displayName || 'anonymous',
                },
              },
            },
          );

          if(confirmError){
            console.log(confirmError)
          }
          if(paymentIntent.status === "succeeded"){
            setProcessing(false);
            setTransactionId(paymentIntent.id);
          }
          console.log('payment intent: ',paymentIntent);
        
    }
    return (
        <div className="w-2/3 mx-auto">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret || processing} className="btn btn-primary btn-sm text-white mt-4">
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600"><small>{cardError}</small></p>}
            {transactionId && <p className="text-green-600"><small>Transaction complete with transactionId: {transactionId}</small></p>}
        </div>
        
    );
};

export default CheckoutForm;