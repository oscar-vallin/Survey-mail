
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {useDispatch} from 'react-redux';
import * as actions from '../../actions';

import {CARD_OPTIONS} from './card-options';

const CheckoutForm = ({onChange}) => {

    const dispatch = useDispatch();
    
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async e => {
        e.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        if(error)  throw error;


        try{
            dispatch(actions.handleToken(paymentMethod));

            elements.getElement(CardElement).clear();
        }catch(error){
            console.log(error);
        };
        
    };

    return(
        <form onSubmit={handleSubmit} className="F">
            <div class="row">
                <div class="col s12 m7">
                <div class="card ">
                    <div class="card-content white-text">
                    
                    </div>
                    <div class="card-action">
                        <CardElement options={CARD_OPTIONS}/>
                        <button>Pay</button>
                    </div>
                </div>
                </div>
            </div>
        </form>
    );
}

export default CheckoutForm;