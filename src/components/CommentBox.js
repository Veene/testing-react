import React from 'react'
import { connect } from 'react-redux'
import { saveComment, fetchComments } from 'actions'

class CommentBox extends React.Component {
  state = { comment: '' }
  onHandleChange = (e) => {
    this.setState({ comment: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    //call action creator to save comment added by user
    this.props.saveComment(this.state.comment)

    this.setState({ comment: '' })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.onHandleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
      
    )
  }
}

export default connect(null, { saveComment, fetchComments } )(CommentBox)