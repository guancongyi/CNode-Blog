// import React from 'react';
// import {createStore, combineReducers} from 'redux'
// import getTopics from './reducer/topic_list'

// export default createStore(combineReducers({
//     getTopics
// }));

import {createStore,combineReducers} from "redux";
import getTopics from "./reducer/topic_list";
import getTopic from "./reducer/single_topic";
export default createStore(combineReducers({
    getTopics,
    getTopic
}));
