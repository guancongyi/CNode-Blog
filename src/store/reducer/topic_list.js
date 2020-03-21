
// function GetTopics(states={
//     data:[]
// }, action){
//     switch(action.type){
//         case 'load_topics':
//             console.log(action.data)  
//             return {
//                 data:action.data
//             }
//     }
//     console.log(states)
//     return states;
// }

// export default GetTopics;


function topics(topics={
    loading:true,
    data:[]
},action){
    switch(action.type){
        case "topics_loading":
            return {
                loading:true,
                data:[]
            }
        case "topics_loadover":
            return {
                loading:false,
                data:action.data
            }
    }
    return topics;
}

export default topics;