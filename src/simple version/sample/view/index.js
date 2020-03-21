import React from 'react';
import {indexNav} from "../router";
import PNav from '../publicNav';
import IndexList from './list';
function IndexPage() {
  return (
    <div>
        <PNav 
           className = {"index_nav"}
           navData = {indexNav}
        />
        <IndexList />
    </div>
  );
}

export default IndexPage;
