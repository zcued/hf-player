import React from 'react'
import ReactDOM from 'react-dom'
import {
  PlayToggle,
  Progress,
  Volume,
  Time,
  FullscreenToggle,
  ControlBar,
  HFPlayer,
} from './src'

function App() {
  return (
    <HFPlayer
      src="https://ali.image.hellorf.com/images/55223dda4101c32fe9fbe76407cee7ca.mp4"
      cover={{
        url:
          'https://ali.image.hellorf.com/images/422dc9c0060e768226088a1192ea4161.png',
        icon: (
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M18.86 12.814L7.582 20.87A1 1 0 0 1 6 20.057V3.943a1 1 0 0 1 1.581-.814l11.28 8.057a1 1 0 0 1 0 1.628z"
                fill="currentColor"
              />
            </g>
          </svg>
        ),
      }}
      width={900}
      height={300}
      autoPlay={false}
      loop={false}
    >
      {({ isPlaying, isFullScreen, isMuted }) => (
        <ControlBar>
          <PlayToggle icon={<div>{isPlaying ? '暂停' : '播放'}</div>} />
          <Progress />
          <Time />
          <Volume icon={<div>{isMuted ? '静音' : '声音'}</div>} />
          <FullscreenToggle
            icon={<div>{isFullScreen ? '还原' : '全屏'}</div>}
          />
        </ControlBar>
      )}
    </HFPlayer>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
