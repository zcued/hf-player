import React, { useRef, useState, useEffect, memo } from "react";
import Video from "./video";
import fullScreen from "../utils/fullscreen";
import { VideoOptions } from "../type";
import "../index.css";

export const PlayerContext = React.createContext(null);

interface Props extends VideoOptions {
  children?: any;
}

function Player({
  src,
  loop = false,
  autoPlay = false,
  muted = true,
  controls = false,
  width,
  height,
  children,
  cover,
}: Props) {
  const containerRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(muted);
  const [currentVolume, setCurrentVolume] = useState(muted ? 0 : 1);
  const [showCover, setShowCover] = useState(!!cover);

  const onTogglePlay = () => {
    if (showCover) {
      setShowCover(false);
    }
    if (!isPlaying) {
      return play();
    }
    pause();
  };

  const play = () => {
    setIsPlaying(true);
    currentVideo.play();
  };

  const pause = () => {
    setIsPlaying(false);
    currentVideo.pause();
  };

  const onToggleFullScreen = () => {
    if (fullScreen.isBrowserFullScreen) {
      return fullScreen.exit();
    }

    return fullScreen.request(containerRef.current);
  };

  // 监听视频全屏
  useEffect(() => {
    const fullScreenCallback = () => {
      setIsFullScreen(fullScreen.isBrowserFullScreen);
    };

    fullScreen.addEventListener(fullScreenCallback);

    return () => {
      fullScreen.removeEventListener(fullScreenCallback);
    };
  }, []);

  useEffect(() => {
    setDuration(currentVideo?.duration);
  }, [currentVideo?.duration]);

  const loadedmetadataCallback = () => {
    setDuration(currentVideo.duration);
  };

  const timeupdateCallback = () => {
    setCurrentTime(currentVideo.currentTime);

    // ended
    if (currentVideo.currentTime === currentVideo.duration) {
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const volumechangeCallback = () => {
    setIsMuted(currentVideo.muted);
    setCurrentVolume(currentVideo.volume);
  };

  useEffect(() => {
    if (currentVideo) {
      // 获取视频总时长
      currentVideo.addEventListener("loadedmetadata", loadedmetadataCallback);
      // 获取当前播放时间
      currentVideo.addEventListener("timeupdate", timeupdateCallback);
      // 获取当前音量
      currentVideo.addEventListener("volumechange", volumechangeCallback);
    }

    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener(
          "loadedmetadata",
          loadedmetadataCallback
        );
        currentVideo.removeEventListener("timeupdate", timeupdateCallback);
        currentVideo.removeEventListener("volumechange", volumechangeCallback);
      }
    };
  }, [currentVideo]);

  const onChangeCurrentTime = (time: number) => {
    setCurrentTime(time);
    currentVideo.currentTime = Math.round(time);
  };

  const onChangeMuted = () => {
    currentVideo.muted = !currentVideo.muted;
  };

  const onChangeVolume = (volume: number) => {
    currentVideo.volume = volume;

    if (volume === 0) {
      currentVideo.muted = true;
    }
  };

  const getInitPlayerProps = () => {
    return {
      isPlaying,
      currentTime,
      duration,
      isMuted,
      currentVolume,
      isFullScreen,
      onTogglePlay,
      onChangeCurrentTime,
      onChangeMuted,
      onChangeVolume,
      onToggleFullScreen,
    };
  };

  const renderComponent = () => {
    if (typeof children === "function") {
      return children(getInitPlayerProps());
    }
    return children;
  };

  return (
    <PlayerContext.Provider
      value={{
        player: {
          ...getInitPlayerProps(),
          currentVideo,
          setCurrentVideo,
          showCover,
        },
      }}
    >
      <div
        className="hf-player-container"
        style={{
          width: isFullScreen ? "100%" : width,
          height: isFullScreen ? "100%" : height,
        }}
        ref={containerRef}
      >
        <Video
          src={src}
          width={width}
          height={height}
          loop={loop}
          autoPlay={autoPlay}
          muted={muted}
          controls={controls}
          cover={cover}
        />

        {renderComponent()}
      </div>
    </PlayerContext.Provider>
  );
}

export default memo(Player);
