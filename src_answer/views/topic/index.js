import React, { useEffect, Fragment } from 'react';
import Details from './details';
import {useParams, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import { useTopic } from '../../store/action';
import { Alert } from 'antd';
function TopicPage() {
  let history = useHistory();
  let {loading,data,isError,errMsg} = useSelector(state=>state.topic);
  let getData = useTopic();
  let {id} = useParams();
  useEffect(()=>{
    getData(id);
  },[id]);
  return (
    <div>
      {
        isError?<Alert 
            banner={true}
            closable
            type="warning"
            message={"请求出错了"}
            description={<Fragment>
                <p>{errMsg}</p>
                <p>点击关闭按钮返回上一步操作</p>
            </Fragment>}
            afterClose={()=>{
              history.goBack();
            }}
        />:<Details 
          loading={loading}
          data={data}
         />
      }
        
    </div>
  );
}
export default TopicPage;
