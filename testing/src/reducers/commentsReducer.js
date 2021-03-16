//supposed to be in charge of the state for comments
//what is a reducer at it's core -> a function that takes an action object and then change state according to it
import { SAVE_COMMENT } from '../actions/types'

const commentsReducer = (state = [], action) => { //state does not refer to the entire global state object but just the part of state that the reducer is in charge of changing -> which in this case is comments
    switch (action.type){
        case SAVE_COMMENT:
            // console.log(state, action)
            return [...state, action.payload] //add comment to comments propperty / variable in state
        default:
            return state
    }
}

export default commentsReducer