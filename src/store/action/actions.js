import axios from 'axios';
import { useDispatch } from 'react-redux';


function useGetTopics() {
    let dispatch = useDispatch()
    return function(page=1,tab='all', limit=15, mrender=true) {
        console.log(1)
        axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}&mrender=${mrender}`).then((res) => {
            //console.log(res)    
            dispatch({ type: 'topics_loadover', data: res.data.data })
        })
    }


}


export { useGetTopics }


// import axios from "axios";
// import { useDispatch } from "react-redux";

// const http = axios.create({
//     baseURL:" https://cnodejs.org/api/v1"
// });

// // 获取主题列表
// function useGetTopics(){
//     let dispatch = useDispatch();
//     return function(page=1,tab="all",limit=15,mdrender=true){
//         dispatch({
//             type:"topics_loading"
//         });
//         http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then((res)=>{
//             //console.log(res);
//             dispatch({
//                 type:"topics_loadover",
//                 data:res.data.data
//             })
//         })
//     }
// }

// // 获取主题详情
// function useTopic(){
//     let dispatch = useDispatch();
//     return function(id){
//         dispatch({
//             type:"topics_loading"
//         });
//         http.get(`/topic/${id}`).then((res)=>{
//             dispatch({
//                 type:"topic_loadover",
//                 data:res.data.data
//             });
//         }).catch((err)=>{
//             dispatch({
//                 type:"topic_error",
//                 errMsg: err.response.data.error_msg
//             });
//         })
//     }
// }

// export {useGetTopics,useTopic}
