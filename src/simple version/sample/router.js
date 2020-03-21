import React from 'react';
import { Redirect } from 'react-router-dom';
import IndexPage from './view/index';
import GetstartPage from './view/getstart';
import AboutPage from './view/about';
import Page404 from './view/page404';
const types = ["all","good","job","share","ask"];

const route_list = [
    {
        path: "/",
        exact: true,
        render(props){
            return <Redirect to="/index/all" />
        }
    },{
        path: "/index",
        exact: true,
        render(props){
            return <Redirect to="/index/all" />
        }
    },{
        path: "/index/:tab",
        exact: true,
        render(props){
            let {match} = props;
            let {params} = match;
            if(types.includes(params.tab)){
                return <IndexPage {...props}  />
            }
            return <Page404 {...props}  />
        }
    },{
        path: "/getstart",
        exact: true,
        render(props){
            return <GetstartPage {...props}   />
        }
    },{
        path: "/about",
        exact: true,
        render(props){
            return <AboutPage {...props}   />
        }
    },{
        path: "*",
        exact: true,
        render(props){
            return <Page404 {...props}  />
        }
    }
];

const nav = [
    {
        name:"首页",
        path: "/index/all",
        exact: true,
        activeClass:"active",
        isActive(pathname){
            pathname = pathname.split("/");
            return pathname[1] == "index"&&types.includes(pathname[2]);
        }
    },{
        name:"新手入门",
        path: "/getstart",
        exact: true,
        activeClass:"active"
    },{
        name:"关于",
        path: "/about",
        exact: true,
        activeClass:"active"
    }
];

const indexNav = [
    {
        name:"全部",
        path: "/index/all",
        exact: true,
        activeClass:"active"
    },{
        name:"精华",
        path: "/index/good",
        exact: true,
        activeClass:"active"
    },{
        name:"招聘",
        path: "/index/job",
        exact: true,
        activeClass:"active"
    },{
        name:"分享",
        path: "/index/share",
        exact: true,
        activeClass:"active"
    },{
        name:"问答",
        path: "/index/ask",
        exact: true,
        activeClass:"active"
    }
];


const nav = [
    {
        name:"index",
        path: "/index/all",
        exact: true,
        activeStyle:{
            color:"red"
        }
    }
]

export {route_list,nav,indexNav}