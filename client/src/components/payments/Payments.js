// import {loadStripe} from '@stripe/stripe-js';
// import {Elements} from '@stripe/react-stripe-js';
import {useDispatch} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
// import CheckoutForm from './CheckoutForm';

// const stripePormise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

import * as actions from '../../actions';


const Payments = () => {

    const dispatch = useDispatch();
    return(

        // <Elements  stripe={stripePormise} >
        //     <CheckoutForm />
        // </Elements>
        <StripeCheckout 
            name="Email"
            description="$5 for 5 email credits"
            amount={500}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            token={token => {
                console.log(token)
                dispatch(actions.handleToken(token))
            }}
            
        >
            <button className="btn">Add credits</button>
        </StripeCheckout>    
    );
}
export default Payments;
