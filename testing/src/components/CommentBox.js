import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveComment } from '../actions'

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
        this.props.saveComment(this.state.comment) //remember all the action creators and state are passed as props into the component

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

export default connect(null, //we don't need anything from global state
    { saveComment } //all you want is the ability to change the state which you need to create actions for aka. objects that reducers receive and use to change state
    )(CommentBox)


// //version i used to work w/react testing library
// const CommentBox = () => {
//     return (
//         <div data-testid="comment-box">
//             Comment Box
//         </div>
//     )
// }

// export default CommentBox