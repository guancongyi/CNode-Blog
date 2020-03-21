import React, { useState, useEffect } from 'react';
import http from "../http";
import { useLocation, useParams } from 'react-router-dom';

function IndexList(){
    let {tab} = useParams();
    console.log(tab)
    let [data,setData]= useState({
        loading:true,
        listData: []
    })
    let {loading, listData} = data;
    useEffect(()=>{
        setData({
            listData:[],
            loading:true
        })
        http.get(`/topics?limit=20&page=1&tab=${tab}`).then((res)=>{
            console.log(res)
            setData({
                listData: res.data.data,
                loading:false
            })
        })
    },[tab])
    return (
        <div>
            {
                loading?"Loading":<ul>
                    {
                        listData.map((d,id)=>{
                            return <li key={id}>{d.title}</li>
                        })
                    }
                </ul>
                
            }
           
        </div>
    )
}

export default IndexList