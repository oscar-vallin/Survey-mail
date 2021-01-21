import {useDispatch} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'

import * as actions from '../../actions/';


const Payments = () => {
    const dispatch = useDispatch();
    return(
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
            <button className="btn-small">Add credits</button>
        </StripeCheckout>    
    );
}
export default Payments;
