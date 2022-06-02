function VideoVotes({ handleVotes, upVoteCount, downVoteCount }) {
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

export default VideoVotes