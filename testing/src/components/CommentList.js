import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {


    createListOfComments = () => {
        return this.props.comments.map((comment, index) => {
            return <li id={index}>{comment}</li>
        })
    }

    render(){
        return (
            <ul>
                {this.createListOfComments()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => { //takes the global state and returns only the part of the state this component compares about -> then passes those values as props to component
    return {comments: state.comments}
}
export default connect(mapStateToProps)(CommentList)