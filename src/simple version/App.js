import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from './nav';
import {routes} from "./routes"
import "./app.css"

function App(){
    return (
        <div className="wrap">
            <Nav />
            <Switch>
                {    
                    routes.map((item, index)=>{
                        return <Route 
                        key={index} 
                        path = {item.path}
                        exact={item.exact} 
                        render = {(props)=>{
                            return item.render(props)
                        }}/>
                    })
                }
               
            </Switch>
        </div>
    )

}

export default App;