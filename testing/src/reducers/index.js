import { comments } from './commentsReducer'
import { combineReducers } from 'redux'

export const reducer = combineReducers({ comments }) //aka. the thing that takes in all actions and changes state accordingly
//NOTE: initial state gets set here -> combineReducers will look at the name of all the reducer functions and set them as the keys of the global state object -> it will then look at all the initial values inside the reducer function and use those as the initial values -> i.e. if I had combineReducers( { reducer1, reducer2, reducer3 }) global state object would look like { reducer1: whateverInitialStateWasInReducer1, reducer2: whateverYougetthepoint, reducer3: youGetthePoint} -> here since it's just 1 reducer it'll be {comments: []}
