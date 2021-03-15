import React, { Component } from 'react'

class CommentBox extends Component {
    state = {
        comment: ''
    }

    handleChange = (event) => {//event will refer to the change event aka. user typed in something
        this.setState({comment: event.target.value})
    }

    handleSubmit = (event) => {//event will refer to the submit event
        event.preventDefault() //submit event by default causes page to reload -> we don't want that

        //TODO - change state-> add this new comment to commentList 

        this.setState({comment: ''}) //after user submits a comment clear out the text area 

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment}/>
                <div><button>Submit Comment</button></div>
            </form>
        )
    }
}

export default CommentBox

// //version i used to work w/react testing library
// const CommentBox = () => {
//     return (
//         <div data-testid="comment-box">
//             Comment Box
//         </div>
//     )
// }

// export default CommentBox