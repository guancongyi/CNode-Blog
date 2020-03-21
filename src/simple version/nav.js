import React from 'react';
import { NavLink} from 'react-router-dom';
import {nav} from './routes'
import PNav from './publicNav';

function Nav(props){
    return (
        <PNav
        className="nav"
        navData= {nav}/>
    )
    
}

export default Nav