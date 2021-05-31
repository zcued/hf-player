# hf-player

### Introduce

基于 h5 video 封装的视频播放器

### Installation

`npm install hf-player --save` or `yarn add hf-player`

### Example

```sh
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
```

### Prop Types

| Property | Type                                | Default | Description                                                      | required |
| -------- | ----------------------------------- | ------- | ---------------------------------------------------------------- | -------- |
| src      | string                              |         | Video url                                                        | Y        |
| loop     | boolean                             | false   | Whether loop play                                                | N        |
| autoPlay | boolean                             | false   | Whether automatic play                                           | N        |
| muted    | boolean                             | true    | The default settings of audio in the video                       | N        |
| controls | boolean                             | false   | Specifying the browser should provide play control for the video | N        |
| width    | number \| string                    |         | Video display area width                                         | N        |
| height   | number \| string                    |         | Video display area height                                        | N        |
| cover    | {url:string,icon: React.ReactNode } |         | Video cover map information                                      | N        |

#### Player Component Types

导出的状态和方法，用来自定义 video control 的状态

| Property            | Type     | Default  | Description                                   |
| ------------------- | -------- | -------- | --------------------------------------------- |
| isPlaying           | boolean  | autoPlay | Whether the video is played                   |
| currentTime         | number   | 0        | Video playing time                            |
| duration            | number   | 0        | Total duration of video                       |
| isMuted             | boolean  | muted    | Has video mute                                |
| currentVolume       | number   |          | Video volume                                  |
| isFullScreen        | boolean  | false    | Video is full screen                          |
| onTogglePlay        | function |          | Change the function of the playback status    |
| onChangeCurrentTime | function |          | Change the function of the current play time  |
| onChangeMuted       | function |          | Change the function of the video mute status  |
| onChangeVolume      | function |          | Change the function of the video volume size  |
| onToggleFullScreen  | function |          | Change the function of the full screen status |

### Contributing

1. Fork, then clone the project.
2. Cd hf-upload, then `yarn` or `npm install`.
3. Run the project in development mode：`yarn start` or `npm start`.
4. Make your changes.
5. Commit and PR.
