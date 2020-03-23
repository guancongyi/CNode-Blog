import React, { useEffect, Fragment } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useGetTopic } from '../../store/action/actions';
import { useSelector } from 'react-redux';
import { List, Alert } from 'antd';
import Details from './details';

function TopicPage(){
    let {pathname} = useLocation()
    let history = useHistory()
    let id = pathname.split('/').pop()
    let getData = useGetTopic();
    useEffect(() => {
        getData(id);
    }, [id])

    
    let {loading, data, isError, errMsg} = useSelector(state=>state.getTopic) 
    console.log(errMsg)
    return (
        <div>
            {
                isError?<Alert 
                banner={true}
                closable
                type="warning"
                message={"Wrong"}
                description={
                    <Fragment>
                        <p>{errMsg}</p>
                        <p>Close the window to continue</p>

                    </Fragment>
                }
                afterClose={()=>{
                    history.goBack()
                }}
                />:<Details 
                loading={loading}
                data={data}/>
            }
            
        </div>
    );
}

export default TopicPage
