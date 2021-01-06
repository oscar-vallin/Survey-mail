import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {FIELDS} from './formFields';
import * as action from '../../actions';

const SurveyFormReview = ({onCancel, history}) => {

    const valuesForm = useSelector(state => state.form.surveyForm.values);
    const dispatch = useDispatch();

  
    return(
        <div>
            <h5>Please confirm your entries</h5>
            {FIELDS.map( field =>  (
            <div key={field.name}>
                <label>Survey {field.label} </label>
                <div>{valuesForm[field.name]}</div>
            </div>
            ))}
            <button 
                className="yellow white-text btn-flat"
                onClick={onCancel}>
                    Back
            </button>
            <button 
                className="green btn-flat white-text right"
                onClick={() => dispatch(action.submitSurvey(valuesForm, history))}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
}
export default withRouter( SurveyFormReview);