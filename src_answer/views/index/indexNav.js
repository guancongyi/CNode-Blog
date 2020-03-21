import React from "react";
import {Menu} from "antd";
import {indexNav,types} from "../../router/index"
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

export default function IndexNav(){
    let {search} = useLocation();
    let {tab} = qs.parse(search.substr(1));
    let activeIndex = tab?types.indexOf(tab):0;
    return <Menu
        mode="horizontal"
        selectedKeys={[activeIndex+""]}
    >
        {indexNav.map((item,index)=>{
            return <Menu.Item key={index}><Link to={item.url}>{item.name}</Link></Menu.Item>
        })}
    </Menu>
}