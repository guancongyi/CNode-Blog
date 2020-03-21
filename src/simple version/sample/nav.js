import React from 'react';
import {nav} from "./router"
import PNav from './publicNav';
function Nav(props) {
  return <PNav 
      className = {"nav"}
      navData = {nav}
  />;
}
export default Nav;
