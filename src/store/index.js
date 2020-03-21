// import React from 'react';
// import {createStore, combineReducers} from 'redux'
// import getTopics from './reducer/topic_list'

// export default createStore(combineReducers({
//     getTopics
// }));

import {createStore,combineReducers} from "redux";
import topics from "./reducer/topic_list";
export default createStore(combineReducers({
    topics
}));
