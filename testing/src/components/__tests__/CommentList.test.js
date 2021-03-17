import { mount } from "enzyme"
import CommentList from "../CommentList"
import Root from '../../Root'

let commentListComponent
beforeEach(() => {//before every test want to create a comment list component to test w/prepopulated comment list items => //realize that for CommentList component to show comments.... it needs comments frm global state -> however global state gets initialized with comments as an empty array -> it only gets populated each time user submits a comment via CommentBox component -> we don't want to write all the code to simulate that behavior -> so instead we're going to set the initial state to start out w/some comments already -> this will be only for the tests because in our app we still want it to be empty -> how we'll do this is we'll change the Root component to take in a initialState prop and use it to initialize the global state object -> in the tests that initialState will be a object w/some comments -> but in our app it will be an empty object which is an indicator to redux to set the initial state using the initial state values specified in the reducers - which is what we've been doing up till now -> only difference was that we weren't providing an initial state object in createStore function but that's an indicator to do the same thing as when there is no argument for initial state passed into createstore
    //since comment list component needs to receive comments from the state we need provider to exist which provides access to the state    
    
    const initialState = { comments: ['Comment 1', 'Comment 2', 'Comment 3'] }
    
    commentListComponent = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    )

})
it('shows a list item for every comment in global state', () => {  //testing the # of list items shown for every comment
    // console.log(commentListComponent.find('li').debug())
    expect(commentListComponent.find('li').length).toEqual(3)



})

it('shows the correct text - aka. each comment - for each list item', () => { //testing the actual text of the list item
    //you know your commentList component will contain 3 lis like <li>Comment 1</li><li>Comment 2</li><li>Comment 3</li> 
    
    //Way 1: EZ way but not recommended by enzyme -> even though grider doesn't know why
    console.log(commentListComponent.text()) //my interpretation of text method -> returns all the innerHTML of the component -> apparently this method of seeing if some innerHTML exists in a component is looked down upon so used their suggested method -> render
    expect(commentListComponent.text()).toContain('Comment 1')
    expect(commentListComponent.text()).toContain('Comment 2')
    expect(commentListComponent.text()).toContain('Comment 3')

    //Way 2: Harder but recommended way - even though reason for recommendation grider doesn't know
    // .render() Returns a CheerioWrapper -> cheeriowrapper is just something that lets you select html elements -> https://github.com/cheeriojs/cheerio -> seems like the same exact idea of looking at the innerHTML text.... so don't see the difference i'm going w/the first option. Unnecessarily convoluted
    // console.log(commentListComponent.render().text())
    // expect(commentListComponent.render().text()).toContain('Comment 1')
    // expect(commentListComponent.render().text()).toContain('Comment 2')
    // expect(commentListComponent.render().text()).toContain('Comment 3')

})