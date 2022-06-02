import React, { useState } from 'react'
import video from "../data/video.js";

function Header({ title }) {
  return <h1>{title}</h1>
}

function VideoStats({ views, createdAt }) {
  return (
    <div>
      <p>{views} Views | Uploaded {createdAt}</p>
    </div>
  )
}

function VideoVotes({ upvotes, downvotes, handleVotes, upVoteCount, downVoteCount }) {
  function sendVotes(e) {
    console.log(e.target.id, e.target.value)
    handleVotes({
      name: e.target.id,
      number: parseInt(e.target.value)
    })
  }
  return (
    <div>
      <button id="up" onClick={sendVotes} value={upVoteCount}>{upVoteCount}👍🏽</button>
      <button id="down" onClick={sendVotes} value={downVoteCount}>{downVoteCount}👎🏽</button>
    </div>
  )
}

function CommentsDisplay({ comments }) {
  const displayComments = comments.map((comment) => {
    return (
      <Comment user={comment.user} comment={comment.comment} />
    )
  })
  return displayComments
}

function Comment({ user, comment }) {
  return (
    <div>
      <h3>{user}</h3>
      <p>{comment}</p>
    </div>
  )
}


function App() {
  const [upVote, setUpVote] = useState(video.upvotes)
  const [downVote, setDownVote] = useState(video.downvotes)

  function handleVotes(vote) {
    if (vote.name === 'down') {
      setDownVote(vote.number + 1)
    } else if (vote.name === 'up') {
      setUpVote(vote.number + 1)
    }
  }
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header title={video.title} />
      <VideoStats views={video.views} createdAt={video.createdAt} />
      <VideoVotes
        handleVotes={handleVotes}
        upVoteCount={upVote}
        downVoteCount={downVote}
        upvotes={video.upvotes}
        downvotes={video.downvotes} />
      <button>Hide Comments</button>
      <CommentsDisplay comments={video.comments} />
    </div>
  );
}

export default App;
