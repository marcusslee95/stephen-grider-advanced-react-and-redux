import commentsReducer from './commentsReducer'
import { combineReducers } from 'redux'

const reducer = combineReducers({ 
    comments: commentsReducer
}) //aka. the thing that takes in all actions and changes state accordingly
//NOTE: initial state gets set here -> it's weird even though you're creating the reducer you can think of it as also creating the initial state of the global state object so in this case global state object is {comments: [] } because we set initial state in commentsReducer to be [] and since it's in charge of comments property in the global state object it sets comments w/that value
export default reducer