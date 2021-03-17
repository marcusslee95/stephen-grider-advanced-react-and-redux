//this file stores all the action creators related to comments aka. all the functions that take some input and create an action out of it

import axios from 'axios'
import { SAVE_COMMENT, FETCH_COMMENTS } from './types'

const saveComment = (commentUserSubmitted) => { //an action is just a object w/a type and a payload that will be received by reducers to change state
    return {
        type: SAVE_COMMENT,
        payload: commentUserSubmitted
    }
}

// //B4: my non async action creator 
// const fetchComments = (arrOfStringsWeGetBackFromApi) => {
//     return {
//         type: FETCH_COMMENTS,
//         payload: arrOfStringsWeGetBackFromApi
//     }
// }
// //AFTER: my non async action creator 

const fetchComments = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
    // console.log(response.data)
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}


export { saveComment, fetchComments } //not exporting saveComment as default because what if I want to export more actionCreators