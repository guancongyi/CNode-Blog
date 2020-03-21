import React from 'react';
import PNav from '../publicNav';
import { indexNav } from '../routes';
import IndexList from './list';

function IndexPage(){
    return(
        <div>
            <PNav
                className="index_nav"
                navData={indexNav}
            />
            <IndexList/>
        </div>
        
    )
}

export default IndexPage;