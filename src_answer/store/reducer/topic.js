function topic(topic={
    loading:true,
    data:{
        author:{}
    },
    isError: false,
    errMsg: ""
},action){
    switch(action.type){
        case "topic_loading":
            return {
                loading:true,
                data:{
                    author:{}
                },
                isError: false,
                errMsg: ""
            }
        case "topic_loadover":
            return {
                loading:false,
                data:action.data,
                isError: false,
                errMsg: ""
            }
        case "topic_error":
            return {
                loading:true,
                data:{
                    author:{}
                },
                isError: true,
                errMsg: action.message
            }   
    }
    return topic;
}

export default topic;