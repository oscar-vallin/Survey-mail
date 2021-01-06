
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';

import SurveyField from './SurveyField';
import validationEmails from '../../utils/validationEmails';
import {FIELDS} from './formFields';

const SurveyForm = ({handleSubmit, onSurveySubmit}) => {

    const renderFields = () => (
         FIELDS.map(({label, name}) => <Field key={name} component={SurveyField} type="text" label={label} name={name} />
    ))

    return(
        <div>
            <form onSubmit={handleSubmit(onSurveySubmit)}>
                {renderFields()}
                <Link to="/surveys" className="red btn-flat white-text">
                    Cancel
                </Link>
                <button type="submit"
                 className="teal btn-flat right white-text"
                 >Next
                   <i className="material-icons right">done</i>
                 </button>
            </form>
        </div>
    );
}

function validate(values){
    const error = {};

     FIELDS.map(({name}) => (!values[name]) ? error[name] = `You must provide a ${name}`: null);

     error['recipients'] = validationEmails(values.recipients || '')
        
    return error;
}
export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);