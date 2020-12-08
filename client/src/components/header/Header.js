import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from '../Payments';

const Header = () => {

    const auth = useSelector(state => state.auth);
   console.log(auth)
    const renderContent = () => {
        switch (auth) {
            case null:
                return;
            case false:
                return (
                    <Fragment>
                         <li><a href="/auth/facebook">Login with Facebook</a></li>
                         <li><a href="/auth/google">Login with Google</a></li>
                    </Fragment>
                )
            default:
                return [
                    <li key="2" style={{marginRight: 10}}><Payments/></li>,
                    <li key="1">Credits {auth.credits}</li>,
                    <li key="3"><a href="/api/logout">Log Outh</a></li>
                ]
        }
    }

    return(
        <nav>
            <div className="nav-wrapper">
                <Link
                 to={auth ? "/surveys" : "/"}
                 className="left brand-logo"
                 >
                    Email
                </Link>
                <ul className="right">
                    {renderContent()} 
                </ul>
            </div>
        </nav>
    );
}

export default Header;