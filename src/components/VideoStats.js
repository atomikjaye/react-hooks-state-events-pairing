function VideoStats({ views, createdAt }) {
  return (
    <div>
      <p>{views} Views | Uploaded {createdAt}</p>
    </div>
  )
}

export default VideoStats