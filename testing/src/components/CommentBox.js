import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveComment, fetchComments } from '../actions'
import axios from 'axios'

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment}/>
                    <div><button>Submit Comment</button></div>
                </form>

                {/* <button onClick={async () => {//b4: my version of FETCH_COMMENTS that doesn't use asynchronous action creator by sending the network request before calling action creator and passing in the response into the action creator
                    const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
                    // console.log(response.data)
                    const arrOfNameStrings = response.data.map(commentObject => commentObject.name) //take each commentObject in the array and replace it with the name string in that object so at the end you won't have arr of objects but arr of strings
                    // console.log(arrOfNameStrings)
                    this.props.fetchComments(arrOfNameStrings)
                }}>Fetch Comments</button> */}
                <button onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

export default connect(null, //we don't need anything from global state
    { saveComment, fetchComments } //all you want is the ability to change the state which you need to create actions for aka. objects that reducers receive and use to change state
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