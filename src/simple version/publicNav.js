import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import {nav} from './routes'

function PNav(props){
    let {className, navData} = props;
    let {pathname} = useLocation();
    return (
        <nav className={className}>
            {
                navData.map((item,id)=>{
                    // console.log(item.isActive)
                    // console.log(pathname)

                    return (
                        <NavLink 
                            to={item.path}
                            exact={item.exact}
                            key={id}
                            isActive={item.isActive?()=>{
                                return item.isActive(pathname)
                            }:null}
                        >{item.name}</NavLink>
                    )
                    
                })
            }
        </nav>
    )
    
}

export default PNav