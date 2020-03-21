import React from 'react';
import IndexNav from "./indexNav";
import IndexList from './indexList';
import IndexPagination from './indexPagination';
function IndexPage() {
  return (
    <div className="index_page">
        <IndexNav />
        <IndexList />
        <IndexPagination />
    </div>
  );
}



export default IndexPage;
