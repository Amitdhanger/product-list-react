import{NavLink} from 'react-router-dom';
import React from 'react';
import './Components.scss';
import logo from '../Assests/Images/logo.png';

class Header extends React.Component{
    render(){
        return(
            <>
            <div className='header'>
                <div className='logo'>
                    <img src={logo} alt="applelogo"/>
                </div>
                <div className='nav'>
                    <NavLink to="/">Phone</NavLink>
                    <NavLink to="/mac">Mac</NavLink>
                    <NavLink to="/ipod">Ipod</NavLink>
    
                </div>
            </div>
            </>
        )
    }
 
}

export default Header