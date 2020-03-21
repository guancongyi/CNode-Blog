import React from 'react';
import IndexNav from './indexNav'
import IndexContent from './indexContent'
function IndexPage(){

    return (
        <div className="index_page">
            <IndexNav/>
            <IndexContent/>
        </div>
    );
}

export default IndexPage
