import React from 'react';
import { Pagination, Button, Layout } from 'antd';
import {Route, Switch} from 'react-router-dom';
import Header from './component/header';
import {routes} from "./router/index"

function App(){
    return (
        <Layout>
            <Header/>
            <Layout.Content>
                <Switch>
                    {routes.map((item, index)=>{
                        return <Route 
                            path={item.path}
                            key={index}
                            exact={item.exact}
                            render={(props)=>{
                                return item.render(props)
                            }}
                        />
                    })}
                </Switch>
            </Layout.Content>
        </Layout>
    )
}

export default App;


