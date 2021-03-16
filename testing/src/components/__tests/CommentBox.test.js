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

it('shows whatever user typed into textarea', () => {
    commentBoxcomponent.find('textarea') //select the textarea html element
    .simulate('change', {
        target:{ value: 'new comment' }
    }) //triggers a fake change event - aka. user typing something into textarea - and passes custom object in 2nd argument as argument to event handler function causing setState to be called w/value we provided
    
    commentBoxcomponent.setProps({})//even thogh the event handler gets called eventually resulting in state changing and component getting updated w/new value in textArea... -> this happens asynchronously aka. it's non blocking -> so there's no guarantee the state has changed and component has updated w/new textarea value by this line. So we'll tell component 'yo component I know you want to change state and then whenever you wanna you'll rerender the component but I'm tellying you nuh-uh you're going to rerender w/new state now!" so that when I write my expectation below I'll know the textarea value will be of that new state
    // console.log(commentBoxcomponent.debug())

    expect(commentBoxcomponent.find('textarea').props().value).toEqual('new comment') //props() just gets the attributes of the textarea html element in 1 object

})

