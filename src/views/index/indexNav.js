import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import { Menu } from 'antd';
import {indexNav, types} from '../../router/index';
import qs from 'qs';

export default function IndexNav(props){
    let {search} = useLocation();
    let {tab} = qs.parse(search.substr(1))
    let activeIndex = tab?types.indexOf(tab):0;
    return (
        <Menu id="index_nav"
            selectedKeys = {[activeIndex+""]}
            mode="horizontal">
                {indexNav.map((item, index)=>{
                    return <Menu.Item key={index}><Link to={item.to}>{item.txt}</Link></Menu.Item>
                })}
        </Menu>
    )
}