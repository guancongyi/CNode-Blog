import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import { Layout, Affix, Row, Col, Menu } from 'antd';
import {nav} from '../router/index';

function Header() {
    let {pathname} = useLocation();
    let activeIndex = nav.findIndex((item)=>item.to===pathname);
    // let activeIndex = nav.findIndex(item=>item.to===pathname)
    return <Affix offsetTop={0}>
            <Layout.Header id="header">
                <div className="wrap">
                    <Row>
                        <Col xs={24} sm={4}>
                            <h1 id="icon"><Link to="/">CNode</Link></h1>
                        </Col>
                        <Col xs={24} sm={20}>
                            <Menu 
                            theme="dark"
                            //default method execute after component mounted
                            selectedKeys = {[activeIndex+""]}
                            mode="horizontal">
                                {nav.map((item, index)=>{
                                    return <Menu.Item key={index}><Link to={item.to}>{item.txt}</Link></Menu.Item>
                                })}
                            </Menu>
                        </Col>

                    </Row>
                </div>

            </Layout.Header>
        </Affix>
    
}
export default Header;