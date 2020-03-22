import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetTopic } from '../../store/action/actions';
import { useSelector } from 'react-redux';
import { List } from 'antd';
import Details from './details';

function TopicPage(){
    let {pathname} = useLocation()
    let id = pathname.split('/').pop()
    let getData = useGetTopic();
    useEffect(() => {
        getData(id);
    }, [id])

    
    let {loading, data} = useSelector(state=>state.getTopic) 
    console.log(data)
    return (
        <div>
            <Details 
                loading={loading}
                data={data}/>
        </div>
    );
}

export default TopicPage
