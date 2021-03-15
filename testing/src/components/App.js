import React from 'react'
import CommentBox from './CommentBox'
import CommentList from './CommentList'

const App = () => {
    return (
        <div>
            <CommentBox/>
            <CommentList/>
        </div>
    )
}

export default App


//version i used to work w/react testing library
// const App = () => {
//     return (
//         <div data-testid="app">
//             <CommentBox/>
//             <CommentList/>
//         </div>
//     )
// }