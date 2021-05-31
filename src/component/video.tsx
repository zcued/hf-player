import React, { useRef, useEffect, memo, useContext } from "react";
import { PlayerContext } from "./player";
import { VideoOptions } from "../type";

function Video({
  src,
  loop = false,
  autoPlay = false,
  muted = true,
  controls = false,
  width,
  height,
  cover,
}: VideoOptions) {
  const { player } = useContext(PlayerContext);
  const videoRef = useRef(null);

  const { setCurrentVideo, onTogglePlay, showCover } = player;

  useEffect(() => {
    setCurrentVideo(videoRef.current);
  }, [videoRef]);

  return (
    <>
      <video
        ref={videoRef}
        controls={controls}
        loop={loop}
        autoPlay={autoPlay}
        muted={muted}
        preload="auto"
        width={width}
        height={height}
        onClick={onTogglePlay}
      >
        <source src={src} type="'video/mp4'" />
        您的浏览器不支持Video标签。
      </video>

      {showCover && (
        <div
          className="cover"
          onClick={onTogglePlay}
          style={{ backgroundImage: `url(${cover.url})` }}
        >
          <div className="cover-mask">{cover.icon}</div>
        </div>
      )}
    </>
  );
}

export default memo(Video);
