import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import { List } from 'antd';
import qs from 'qs'
import { useSelector } from 'react-redux';
import { useGetTopics } from '../../store/action/actions'

function IndexContent() {
    let { search } = useLocation();
    let { tab } = qs.parse(search.substr(1));
    let page = 1;
    // let tab = query.tab;
    // console.log(tab)
    let getData = useGetTopics();

    // // console.log(getData)
    useEffect(() => {
        getData(page, tab);
        console.log(2)
    }, [tab])

    let { data } = useSelector(state => state.topics);
    return <List>
        {data.map((item, id) => {
            console.log(item)
            return <List.Item><a link="">{item.title}</a></List.Item>
        })}
    </List>




    // return <List 
    //         loading={loading}
    //         dataSource={data}
    //         style={{
    //             padding: '0 15px'
    //         }}
    //         renderItem={(itemData)=>{
    //             let {id,title} = itemData;
    //             return <List.Item><Link to={`/topic/${id}`}>{title}</Link></List.Item>
    //         }}
    //     >
    //     </List>

}

export default IndexContent
