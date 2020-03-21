import React, { useState, useEffect } from 'react';
import http from "../http";
import { useParams } from 'react-router-dom';
function IndexList() {
  let {tab} = useParams(); 
  let [data,setData] = useState({
      loading: true,//正在请求
      listData:[]
  });
  let {loading,listData} = data;
  useEffect(()=>{
    setData({
        loading:true,
        listData: []
    });
    http.get(`/topics?limit=20&page=1&tab=${tab}`).then((res)=>{
        setData({
            loading:false,
            listData: res.data.data
        });
    })
  },[tab]);
  return (
      <div> 
            {loading?
                "正在请求数据"
            :
                <ul>
                    {listData.map((liData,index)=>{
                        return <li key={index}>{liData.title}</li>
                    })}
                </ul>
            }
      </div>
    
  );
}

export default IndexList;
