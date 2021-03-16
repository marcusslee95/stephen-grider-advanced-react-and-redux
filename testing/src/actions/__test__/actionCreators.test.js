import { saveComment } from ".."
import { SAVE_COMMENT } from "../types"


describe('saveComment Action Creator', () => { //action creators just take something as input and return an object w/a type property and a payload property whose value is that input -> so you're just checking if it creates the correct object
    it('returns an object - aka. action - with the correct type property', () => {
        const action = saveComment() //don't neeed to pass anything as input because should still return object w/type property
        expect(action.type).toEqual(SAVE_COMMENT)
    })

    it('returns an object - aka. action - with the correct payload property', () => {
        const action = saveComment('New Comment') 
        expect(action.payload).toEqual('New Comment')
    })
})