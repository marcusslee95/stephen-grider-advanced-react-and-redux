//this file stores all the action creators related to comments aka. all the functions that take some input and create an action out of it

import { SAVE_COMMENT } from './types'

export const saveComment = (commentUserSubmitted) => { //an action is just a object w/a type and a payload that will be received by reducers to change state
    return {
        type: SAVE_COMMENT,
        payload: commentUserSubmitted
    }
}