import React from 'react';
import IndexNav from './indexNav'
import IndexContent from './indexContent'
import IndexPagination from './indexPagination';
function IndexPage(){

    return (
        <div className="index_page">
            <IndexNav/>
            <IndexContent/>
            <IndexPagination/>
        </div>
    );
}

export default IndexPage
