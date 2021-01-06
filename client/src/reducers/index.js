import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import authReducer from './authReducer';
import surveyRefucer from './surveyReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    survey: surveyRefucer
});