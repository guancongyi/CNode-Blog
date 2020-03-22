import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import { List } from 'antd';
import qs from 'qs'
import { useSelector } from 'react-redux';
import { useGetTopics } from '../../store/action/actions'

function IndexContent() {
    let { search } = useLocation();
    let { tab, page} = qs.parse(search.substr(1));
    
    // let tab = query.tab;
    // console.log(tab,page)
    let getData = useGetTopics();

    // // console.log(getData)
    useEffect(() => {
        getData(page, tab);
    }, [tab,page])

    let { data, loading } = useSelector(state => state.getTopics);
    return <List
        loading={loading}
        dataSource={data}
        renderItem={
            (item) => {
                let { id, title } = item;
                return <List.Item><Link to={`/topic/${id}`}>{title}</Link></List.Item>
            }
        }>
    </List>

}

export default IndexContent
