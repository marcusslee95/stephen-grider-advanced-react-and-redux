//Will write tests using enzyme -> using react testing library would be ideal because that's gaining steam while there are signs enzyme loosing steam (i.e. Airbnb created enzyme but now letting open source maintain it + they're using more and more of react testing library + enzyme doesnt have an adapter for react v17 available yet which is why i'm using an unofficial version) but that would mean I'd have to figure out react testing library way to do everything grider does which might take too much time (esp given tight window until interview)

import React from 'react'
import App from '../App'
import ComponentBox from '../CommentBox'
//enzyme stuff
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
Enzyme.configure({ adapter: new Adapter() });

it('shows the CommentBox component', () => {
    const stuffInsideAppComponentThatWasRendered = shallow(<App/>) //renders everything inside the App component besides child components inside it (though it does create a bookmark / placeholder saying a child component does exist here) -> returns an object of the stuff we rendered
    expect(stuffInsideAppComponentThatWasRendered.find(ComponentBox).length).toEqual(1)
})



//No testing library version of the 1st test I created 
// it('shows the CommentBox component', () => {
//     const div = document.createElement('div') //create a div element in JSDom
//     ReactDOM.render(<App/>, div) //put App component inside div we just created -> now that we have our App component on the JSDom in code below we can check to see if it is working liked we want it to 

//     console.log(div.innerHTML)
//     // console.log(div)

//     expect(div.innerHTML).toContain('Comment Box') //assumes knowledge about another component - that CommentBox component has 'Comment Box' inside it - tests like these are to be avoided

//     ReactDOM.unmountComponentAtNode(div) // deletes App component from div element -> for cleanup
// })


//React testing library version of the 1st test I created 
// import { render, screen } from '@testing-library/react' //gives us stuff that makes it easier to write tests
// import '@testing-library/jest-dom'; //gives us cool matching functions like toContainElement

// it ('shows the CommentBox component', () => {

//     // https://testing-library.com/docs/react-testing-library/example-intro
//     render(<App/>) // "The render method renders a React element into the DOM."

//     // https://testing-library.com/docs/react-testing-library/example-intro/
//     const app = screen.getByTestId('app') //I'm guessing screen is the dom
//     console.log(app.innerHTML)
//     const commentBox = screen.getByTestId('comment-box')
//     console.log(commentBox.innerHTML)

//     // https://www.npmjs.com/package/@testing-library/jest-dom#tocontainelement
//     expect(app).toContainElement(commentBox)
// })