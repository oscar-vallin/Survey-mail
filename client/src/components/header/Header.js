import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import M from  'materialize-css/dist/js/materialize.min.js';

import Payments from '../payments/Payments';

const Header = () => {
    const auth = useSelector(state => state.auth);
 
    useEffect(() => {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    },[]);

    return(
    
        <nav>
            <div>
                <Link to="/surveys" className="brand-logo center">Email</Link>
            </div>
            <p style={{cursor: 'pointer'}} data-target="slide-out" to="#" className="sidenav-trigger show-on-large">
                <i className="material-icons">menu</i>
            </p>
                
            {auth ?
            <ul id="slide-out" className="sidenav red lighten-5" >
                <div className="container ">
                     <li><img class="circle" src={auth.image} alt={auth.name}/></li>
                     <li className="black-text">{auth.name}</li>
                     <li className="black-text">{auth.email}</li>
                     <li><Payments/></li>
                     <li style={{color: 'black'}}>Credits {auth.credits}</li>
                     <li style={{marginLeft: -30}}><a href="/api/logout">Log Outh</a></li>
                </div>
            </ul>
                    : 
            <ul id="slide-out" className="sidenav">        
                     <a class="btn red lighten-1" href="/auth/google">
                      Sign in with Google</a>
                    <a class=" blue darken-4 btn" href="/auth/facebook">
                      Sign in with Facebook</a>
            </ul>
                }
              
        </nav>
    );
}

export default Header;