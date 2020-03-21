import React, { useEffect } from 'react';
import { Layout, Affix, Row, Col, Menu } from 'antd';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {nav} from "../router/index";

function Header(){
    let {pathname} = useLocation();
    let history = useHistory();
    let activeIndex = nav.findIndex(item=>item.to === pathname);
    return <Affix offsetTop={0}>
        <Layout.Header id="header">
            <div className="wrap">
                <Row>
                    <Col xs={24} sm={4}>
                        <h1 id="logo"><Link to="/">开课吧</Link></h1>
                    </Col>
                    <Col  xs={24} sm={20}>
                    {/* defaultSelectedKeys={[activeIndex+""]} 组件挂载完之后，执行更新完并不会走它 */}
                        <Menu 
                            mode="horizontal"
                            theme={"dark"}
                            selectedKeys={[activeIndex+""]}
                        >
                            {nav.map((item,index)=>{
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