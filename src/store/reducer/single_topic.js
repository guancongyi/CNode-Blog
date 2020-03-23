function getTopic(getTopic={
    loading:true,
    data:[],
    isError: false,
    errMsg:""
}, action){
    switch(action.type){
        case "topic_loading":
            return {
                loading:true,
                data:[]
            }
        case "topic_loadover":
            return {
                loading:false,
                data:action.data
            }
        case "topic_error":
            return {
                loading:true,
                data:[],
                isError: true,
                errMsg:action.message
            }
    }
    return getTopic;
}

export default getTopic