import React, { useState } from 'react'
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {

    const [showReview, changeShowReview] = useState(false);
    return(
        <div>
            {!showReview
                ? <SurveyForm onSurveySubmit = {() => changeShowReview(prevState => !prevState)}/>
                : <SurveyFormReview onCancel={() => changeShowReview(prevState => !prevState)}/>
             }
        </div>
    );
}

export default reduxForm({
    form: 'surveyForm'
})( SurveyNew);