import commentsReducer from "../commentsReducer"
import { SAVE_COMMENT} from '../../actions/types'


it ('handles actions of type SAVE_COMMENT aka. takes comment user submitted and adds it to list of comments in global state', () => {//testing a reducer is ez -> it's a function -> just provide some input and see if it results in output you'd expect - in this case it's the changed state you'd expect
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }
    const newStateJustThePartCommentsReducerIsInChargeOfAkaComments = 
        commentsReducer([], action) //just setting comments state to be aempty arrray so that when add new comment just have to check if comments state is [theNewComment]
    
    expect(newStateJustThePartCommentsReducerIsInChargeOfAkaComments).toEqual(['New Comment'])
})

it('doesnt error when action of unknown type happens', () => {
    const newStateJustThePartCommentsReducerIsInChargeOfAkaComments = 
        commentsReducer([], {type: 'rando'}) //obviously this line of code shouldn't error

    expect(newStateJustThePartCommentsReducerIsInChargeOfAkaComments).toEqual([]) //since should have gone through default case where we just return previous state of comments

})