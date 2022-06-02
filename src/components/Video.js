function Video({ videoURL, title }) {
  return (
    <iframe
      width="919"
      height="525"
      src={videoURL}
      frameBorder="0"
      allowFullScreen
      title={title}
    />
  )

}

export default Video