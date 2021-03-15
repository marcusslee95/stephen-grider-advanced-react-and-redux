import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

it ('shows the CommentBox component', () => {
    const div = document.createElement('div') //create a div element in JSDom
    ReactDOM.render(<App/>, div) //put App component inside div we just created
    
    // console.log(div.innerHTML)
    // console.log(div)

    expect(div.innerHTML).toContain('Comment Box') //assumes knowledge about another component - that CommentBox component has 'Comment Box' inside it - tests like these are to be avoided

    ReactDOM.unmountComponentAtNode(div) // deletes App component from div element -> for cleanup
})