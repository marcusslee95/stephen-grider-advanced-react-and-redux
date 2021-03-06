//supposed to be in charge of the state for comments
//what is a reducer at it's core -> a function that takes an action object and then change state according to it
import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types'

const commentsReducer = (state = [], action) => { //state does not refer to the entire global state object but just the part of state that the reducer is in charge of changing -> which in this case is comments
    switch (action.type){
        case SAVE_COMMENT:
            // console.log(state, action)
            return [...state, action.payload] //add comment to comments propperty / variable in state
        case FETCH_COMMENTS:
            // console.log(action.payload)
            const arrOfNameStrings = action.payload.data.map(commentObject => commentObject.name) //take each commentObject in the array and replace it with the name string in that object so at the end you won't have arr of objects but arr of strings
            // console.log(arrOfNameStrings)
            return [...state, ...arrOfNameStrings]
        default:
            return state
    }
}

export default commentsReducer