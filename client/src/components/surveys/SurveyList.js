import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSurveys} from '../../actions';

const SurveyList = () => {

    const surveys = useSelector(state => state.survey);
    const dispacth = useDispatch();
    
    useEffect(() => {
        dispacth(fetchSurveys());
    },[dispacth]);

    const renderSurveys = () => {
          return surveys.surveys.reverse().map((survey) => (
            <div className="card darken-1" key={survey._id}>
                <div className="card-content">
                    <span className="card-title">{survey.title}</span>
                    <p>
                        {survey.body}
                    </p>
                    <p className="right">
                        Sent on: {new Date(survey.dateSent).toLocaleDateString()}
                    </p>
                </div>
                <div className="card-action">
                    <a href="#">Yes: {survey.yes}</a>
                    <a href="#">No: {survey.no}</a>
                </div>
            </div>
        ))
    }

    return(
        <div>
            {renderSurveys()}
        </div>
    );
}

export default SurveyList;