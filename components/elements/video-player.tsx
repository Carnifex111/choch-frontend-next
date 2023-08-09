import React, { useEffect } from 'react'

const VideoPlayer = ({ linkToVideo, poster, className }: any) => {
  useEffect(() => {
    const videoElement = document.getElementById(
      'video-player'
    ) as HTMLVideoElement
    videoElement.src = linkToVideo
    videoElement.load()
  }, [linkToVideo])

  useEffect(() => {
    const videoElement = document.getElementById(
      'video-player'
    ) as HTMLVideoElement
    videoElement.poster = poster
  }, [poster])

  return (
    <div className="video-wrap">
      <video
        id="video-player"
        controls
        controlsList="nodownload"
        poster={poster}
        className={className}
      >
        <source src={linkToVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoPlayer
