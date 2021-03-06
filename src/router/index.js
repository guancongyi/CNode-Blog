import React from 'react';
import IndexPage from '../views/index/index'
import TopicPage from '../views/topic/index'
import AboutPage from '../views/about/about'
import GetstartPage from '../views/getstart/getstart'


const types = ['all', 'good', 'hire']
const routes = [
    {
        path:'/',
        exact:true,
        render(props){
            return <IndexPage {...props}/>
        }
    },
    {
        path:'/topic/:id',
        exact:true,
        render(props){
            return <TopicPage {...props}/>
        }
    },
    {
        path:'/user/:username',
        exact:true,
        render(props){
            return <IndexPage {...props}/>
        }
    },
    {
        path:'/about',
        exact:true,
        render(props){
            return <AboutPage {...props}/>
        }
    },
    {
        path:'/getstart',
        exact:true,
        render(props){
            return <GetstartPage {...props}/>
        }
    }
]


const nav = [
    {
        to:'/',
        txt:'Home'
    },
    {
        to:'/about',
        txt:'About'
    },
    {
        to:'/getstart',
        txt:'Get Start'
    }
]

const indexNav = [
    {
        to:'/?tab=all',
        txt: 'All'
    },
    {
        to:'/?tab=good',
        txt: 'Selected'
    },
    {
        to:'/?tab=hire',
        txt: 'Hiring'
    },
]

export {nav, routes, indexNav, types};




// import React from "react";
// import IndexPage from "../views/index/index";
// import TopicPage from "../views/topic/index";
// import UserPage from "../views/user/index";
// import GetstartPage from "../views/getstart/getstart";
// import AboutPage from "../views/about/about";
// import Page404 from "../views/page404/index";
// const types = ["all","good","share","ask","job","dev"]; 
// const routes = [
//     {
//         path: "/",
//         exact: true,
//         render(props){
            
//             return <IndexPage {...props} />
//         }
//     },{
//         path: "/topic/:id",
//         exact: true,
//         render(props){
//             return <TopicPage {...props} />
//         }
//     },{
//         path: "/user/:username",
//         exact: true,
//         render(props){
//             return <UserPage {...props} />
//         }
//     },{
//         path: "/getstart",
//         exact: true,
//         render(props){
//             return <GetstartPage {...props} />
//         }
//     },{
//         path: "/about",
//         exact: true,
//         render(props){
//             return <AboutPage {...props} />
//         }
//     },{
//         path: "",
//         exact: false,
//         render(props){
//             return <Page404 {...props} />
//         }
//     }
// ]; 

// const nav = [{
//     to: "/",
//     txt:"首页"
// },{
//     to: "/getstart",
//     txt:"新手入门"
// },{
//     to: "/about",
//     txt:"关于我们"
// }];

// const indexNav = [
//     {
//         name:"全部",
//         url :"/?tab=all"
//     },{
//         name:"精华",
//         url :"/?tab=good"
//     },{
//         name:"分享",
//         url :"/?tab=share"
//     },{
//         name:"问答",
//         url :"/?tab=ask"
//     },{
//         name:"招聘",
//         url :"/?tab=job"
//     },{
//         name:"客户端测试",
//         url :"/?tab=dev"
//     }
// ];

// export {routes,nav,indexNav,types} 