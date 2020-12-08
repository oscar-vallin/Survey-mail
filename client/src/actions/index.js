//our function
import {FETCH_USER} from './types';
import axios from 'axios';

//get user
export const fetchUser = () => async dispacth => {
   const user = await axios.get('/api/current_user')
        dispacth({
            type: FETCH_USER,
            payload: user.data
        });
}

//send token to backend
export const handleToken = token => async dispacth =>{
    const res = await axios.post('/api/stripe', token);

    dispacth({
        type: FETCH_USER,
        payload: res.data
    })
}