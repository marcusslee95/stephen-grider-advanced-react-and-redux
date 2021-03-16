import React from 'react'
import CommentBox from "../CommentBox";
import { mount } from 'enzyme'

let commentBoxcomponent
beforeEach(() => {
    commentBoxcomponent = mount(<CommentBox/>);//we'll be initializing a new Comment Box component to work w/before ever test so just pulled it out here
})
afterEach(() => {
    commentBoxcomponent.unmount() //we'll also be removing the CommentBox component from the JSDom after every test -> because unlike shallow and static render methods, fullDom render method actually puts component into the JSDom -> if we don't do this every test we'll be adding another instance of the CommentBox component to the DOM -> that will make tests slower and might interfere with tests
})
it('shows a textarea and a button', () => {
    // console.log(commentBoxcomponent.debug())
    // console.log(commentBoxcomponent.find('textarea').debug())
    expect(commentBoxcomponent.find('textarea').length).toEqual(1) //so find method can not only find childComponents but also normal html elements inside a component
    expect(commentBoxcomponent.find('button').length).toEqual(1)
})

