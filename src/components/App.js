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

function VideoVotes({ upvotes, downvotes }) {
  return (
    <div>
      <button>{upvotes}👍🏽</button>
      <button>{downvotes}👎🏽</button>
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
      <VideoVotes upvotes={video.upvotes} downvotes={video.downvotes} />
      <button>Hide Comments</button>
      <CommentsDisplay comments={video.comments} />
    </div>
  );
}

export default App;
