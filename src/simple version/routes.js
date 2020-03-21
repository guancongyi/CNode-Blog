import React from 'react';
import { Redirect } from "react-router-dom"
import IndexPage from "./view/index"
import AboutPage from "./view/about"
import GetStartPage from "./view/getStart"
import NotFoundPage from "./view/page404"
let types = ["all", "good", "job","share", "ask"]

let routes = [
    {
        path:"/",
        exact:true,
        render(props){
            return <Redirect to="/index/all" />
        }
    },
    {
        path:"/index",
        exact:true,
        render(props){
            return <Redirect to="/index/all" />
        }
    },
    {
        path:"/index/:tab",
        exact:true,
        render(props){
            
            let {match} = props;
            
            let {params} = match;
            // console.log(params)
            if (!types.includes(params.tab)){
                return <NotFoundPage  {...props}/>

            }
            return <IndexPage {...props}/>
        }
    },{
        path:"/about",
        exact:true,
        render(props){
            return <AboutPage  {...props}/>
        }
    },{
        path:"/getstart",
        exact:true,
        render(props){
            return <GetStartPage  {...props}/>
        }
    },{
        path:"*",
        exact:true,
        render(props){
            return <NotFoundPage  {...props}/>
        }
    }

];

const nav = [
    {
        name:"index",
        path: "/index/all",
        exact: true,
        activeClass:"active",
        isActive(pathname){
            pathname = pathname.split("/")
            return pathname[1] == "index" && types.includes(pathname[2])
        },
        isNotActive(){

        }
    },
    {
        name:"get start",
        path: "/getstart",
        exact: true,
        activeClass:"active"
    },
    {
        name:"about",
        path: "/about",
        exact: true,
        activeClass:"active"
    }

];

const indexNav = [
    {
        name:"all",
        path: "/index/all",
        exact: true,
        activeClass:"active"
    },
    {
        name:"select",
        path: "/index/good",
        exact: true,
        activeClass:"active"
    },
    {
        name:"job",
        path: "/index/job",
        exact: true,
        activeClass:"active"
    },
    {
        name:"share",
        path: "/index/share",
        exact: true,
        activeClass:"active"
    },
    {
        name:"forum",
        path: "/index/ask",
        exact: true,
        activeClass:"active"
    }
]

export {routes, nav, indexNav}