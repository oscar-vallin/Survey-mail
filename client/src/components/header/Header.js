import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from '../payments/Payments';

const Header = () => {

    const auth = useSelector(state => state.auth);
 
    const renderContent = () => {
        switch (auth) {
            case null:
                return;
            case false:
                return (
                         <li><a href="/auth/google">Login with Google</a></li>
                )
            default:
                return [
                    <li key="1" ><Payments /></li>,
                    <li key="3" style={{ margin: '0 10px' }}>Credits {auth.credits}</li>,
                    <li key="2"><a href="/api/logout">Log Outh</a></li>
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