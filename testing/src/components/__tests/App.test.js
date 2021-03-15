import React from 'react'
import App from '../App'
import { render, screen } from '@testing-library/react' //gives us stuff that makes it easier to write tests
import '@testing-library/jest-dom'; //gives us cool matching functions like toContainElement

it ('shows the CommentBox component', () => {

    // https://testing-library.com/docs/react-testing-library/example-intro
    render(<App/>) // "The render method renders a React element into the DOM."

    // https://testing-library.com/docs/react-testing-library/example-intro/
    const app = screen.getByTestId('app') //I'm guessing screen is the dom
    console.log(app.innerHTML)
    const commentBox = screen.getByTestId('comment-box')
    console.log(commentBox.innerHTML)

    // https://www.npmjs.com/package/@testing-library/jest-dom#tocontainelement
    expect(app).toContainElement(commentBox)
})