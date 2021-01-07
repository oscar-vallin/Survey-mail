//our function
import {FETCH_USER, FETCH_SURVEYS} from './types';
import axios from 'axios';

//get user
export const fetchUser = () => async dispacth => {
   const user = await axios.get('/api/current_user')
        dispacth({
            type: FETCH_USER,
            payload: user.data
        });
};

//send token to backend
export const handleToken = token => async dispacth =>{
    
    const res = await axios.post('/api/stripe', token);
 
    dispacth({
        type: FETCH_USER,
        payload: res.data
    });
};

export const submitSurvey = (values, history) => async dispacth => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispacth({
        type: FETCH_USER,
        payload: res.data
    });
};

export const fetchSurveys = () => async dispacth => {

    const res = await axios.get('/api/surveys');

    dispacth({type: FETCH_SURVEYS, payload: res.data});
}