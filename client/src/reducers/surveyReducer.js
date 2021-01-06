import {FETCH_SURVEYS} from '../actions/types';

const initialState = {
    surveys: [],
}
export default function reducer(state = initialState,action){
    switch(action.type){
        case FETCH_SURVEYS:
            return {surveys: action.payload}
        default:
            return state;
    };
};