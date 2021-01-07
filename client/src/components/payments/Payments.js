import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';

const stripePormise = loadStripe(process.env.REACT_APP_STRIPE_KEY);



const Payments = () => {

    return(

        <Elements  stripe={stripePormise} >
            <CheckoutForm />
        </Elements>
        // <StripeCheckout 
        //     name="Email"
        //     description="$5 for 5 email credits"
        //     amount={500}
        //     token={token => {
        //         console.log(token)
        //         dispatch(actions.handleToken(token))
        //     }}
        //     stripeKey={process.env.REACT_APP_STRIPE_KEY}
        // >
        //     <button className="btn">Add credits</button>
        // </StripeCheckout>    
    );
}
export default Payments;
