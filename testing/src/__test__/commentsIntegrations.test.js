//file to test if any user behaviors are causing the conseuqences that we want to cause (i.e. if a user clicks fetch Comments button do we eventually serve up the comments on the UI)
import React from 'react';
import Root from '../Root'
import App from '../components/App'
import { mount } from 'enzyme'
import moxios from 'moxios'


beforeEach(() => {
    moxios.install() //to me this line of code just means get ready to use moxios before every test
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', 
        {
            status: 200,
            response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}] //need array of objects because that's what api returned but don't need all the fields cuz as long as fits the structure of what we get back it's a valid replacement for what would have been the response object -> but then I realized that reducer looks for response.data but..... there's no data property on this thing.... maybe it magically knows that whatever is in response is supposed to be value to the data prop?
        }
    )
})
afterEach(() => {
    moxios.uninstall()//do some clean up .... honestly not sure how it helps.... just followed grider
})

it('shows comments when user clicks "Fetch Comments" button', (done) => {//done let's us override default test runner behavior that blazes through all of code even before it finishes -> would mean that we don't even wait for moxios.wait()
    //Recipe / algorithm for testing this: 1. create the App component (can't just create Fetch Comments button because <li>s to be created will be part of comment list component ) 2. simulate click event on Fetch comments button - to triggger all the things involved in changing the state which will eventually rerender the comment list component w/the new <li>s 3. see if same # <li>s returned as those provided by the api
    const appComponent = mount(//need Root component because need access to provider component that provides access to state.... which i'll need because part of my test involves using state to generate <li>s 
        <Root>
            <App/>
        </Root>
    )

    appComponent.find('.fetch-comments').simulate('click')
    //by here click should have triggered request getting sent response coming back using it to create action using action to change state in reducer changed state resulting in rerender of components connected to state including Comment List component w/<li>s of comments we got back... so should be good writing expctation here
    moxios.wait(() => {//wait until after moxios stops request from sending and sends backs it's own response causing state to change
        appComponent.update() //force rerender with new state just in case -> even though not advised... use this instead of setProps cuz that's the thing that was erroring everything out
        console.log(appComponent.find('li').debug())
        expect(appComponent.find('li').length).toEqual(2)
        done()//tell jest test is now finished.... thanks for waiting
        appComponent.unmount()
    })

})
