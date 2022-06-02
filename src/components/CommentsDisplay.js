// import React from 'react'
import Comment from './Comment'

function CommentsDisplay({ comments }) {
  const displayComments = comments.map((comment) => {
    return (
      <Comment user={comment.user} comment={comment.comment} />
    )
  })
  return displayComments
}

export default CommentsDisplay