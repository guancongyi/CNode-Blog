import React, { useEffect } from "react";
import qs from "qs";
import { List } from "antd";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import {useTopics} from "../../store/action/index";

export default function IndexList(){
    let {pathname} = useLocation();
    console.log(pathname)
    let {loading,data} = useSelector(state=>state.topics);
    let {search} = useLocation();
    console.log(search)
    let {tab="all",page=1} = qs.parse(search.substr(1));
    let getData = useTopics();
    useEffect(()=>{
        getData(page,tab);
    },[tab,page])
    return <List 
            loading={loading}
            dataSource={data}
            style={{
                padding: '0 15px'
            }}
            renderItem={(itemData)=>{
                let {id,title} = itemData;
                return <List.Item><Link to={`/topic/${id}`}>{title}</Link></List.Item>
            }}
        >
        </List>
}