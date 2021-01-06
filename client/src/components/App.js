import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as actions from '../actions';

import Header from './header/Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

const  App  = () =>{

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchUser());
    },[dispatch])
  
        return(
            <div className="container">
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route exact path="/surveys/new" component={SurveyNew} />
                    </Switch>
                </Router>
            </div>
        );
    }

export default App;