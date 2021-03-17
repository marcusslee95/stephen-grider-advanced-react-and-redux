//file to test if any user behaviors are causing the conseuqences that we want to cause (i.e. if a user clicks fetch Comments button do we eventually serve up the comments on the UI)

import Root from '../Root'
import App from '../components/App'
import { mount } from 'enzyme'

it('shows comments when user clicks "Fetch Comments" button', () => {
    //Recipe / algorithm for testing this: 1. create the App component (can't just create Fetch Comments button because <li>s to be created will be part of comment list component ) 2. simulate click event on Fetch comments button - to triggger all the things involved in changing the state which will eventually rerender the comment list component w/the new <li>s 3. see if same # <li>s returned as those provided by the api
    const appComponent = mount(//need Root component because need access to provider component that provides access to state.... which i'll need because part of my test involves using state to generate <li>s 
        <Root>
            <App/>
        </Root>
    )

    appComponent.find('.fetch-comments').simulate('click')
    //by here click should have triggered request getting sent response coming back using it to create action using action to change state in reducer changed state resulting in rerender of components connected to state including Comment List component w/<li>s of comments we got back... so should be good writing expctation here
    expect(appComponent.find('li').length).toEqual(500)


})