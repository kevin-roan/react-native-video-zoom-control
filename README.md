# 🎮 react-native-video-zoom-control


> 
> If you do not want video zoom and video resolution controls, use this package instead; https://github.com/LunatiqueCoder/react-native-media-console.git
> 

VideoPlayer for the React Native `<Video/>` component at [react-native-video][15].

### ⚠️ **Note:**
>
> We're only supporting the beta version of `react-native-video`. Since it looks stable enough except for the subtitles (which might still be a WIP at the time of writing), we're already using it in production at http://englishdiscoveries.net/

## ⭐️ Features

This package contains a simple set of GUI controls that work with the [react-native-video][15] `<Video>` component.
- [x] `react-native-reanimated`
- [x] Back Button
- [x] Volume bar
- [x] Fullscreen button
- [x] Play/Pause button
- [x] Rewind/Forward buttons
- [x] Seekbar
- [x] Title
- [x] Timer
- [x] Video Zoom feature
- [x] Video Resolution controls


By default, tapping the screen anywhere will show the player controls. After 15s the controls disappear. Double tapping will toggle fullscreen.

## ⚙️ Installation

Run `yarn add react-native-video react-native-media-console`

Then follow installation instructions from [react-native-video][15].

If you are using `react-native-reanimated`, then you can use `yarn add @react-native-media-console/reanimated`

> **🚧 WARNING**
>
> You need react-native-video > 6.0.0 in order to use this library.

## 🛠 Usage

The `<VideoPlayer>` component follows the API of the `<Video>` component at [react-native-video][15]. It also takes a number of additional props which are outlined in the [API](#-api) section.

```javascript
import VideoPlayer from 'react-native-media-console';
import {useAnimations} from '@react-native-media-console/reanimated';

<VideoPlayer
    useAnimations={useAnimations}
    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
    navigator={props.navigator}
    videoUrls={[
      'https://example.com/video-low.mp4',
      'https://example.com/video-medium.mp4',
      'https://example.com/video-high.mp4',
    ]}
    selectResolutionCallback={(resolution) => console.log('Selected resolution:', resolution)}
/>;
```

To play a local file, use require syntax like so:

```js
<VideoPlayer source={require('path/to/file')}/>
```

## 🧪 API

The `<VideoPlayer>` component can take a number of inputs to customize it as needed. They are outlined below:

### Props

In addition to the props from the `<Video />` component at [react-native-video][15], `<VideoPlayer />` also supports:

| Prop                          | Type                                          | Default                                  | Description                                                                                                          |
|--------------------------------|-----------------------------------------------|------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| selectResolutionCallback       | Function                                     | null                                     | Callback function triggered when the user selects a resolution option. Parameters: `resolution` (auto, high, medium, low). |
| disableAllControls             | Boolean                                      | false                                    | Disables all controls.                                                                                              |
| disableResolution              | Boolean                                      | false                                    | Disables the resolution selection option.                                                                           |
| videoUrls                      | Array of Strings                            | []                                       | List of video URLs for different resolutions.                                                                       |
| alwaysShowControls             | Boolean                                      | false                                    | Always show controls.                                                                                               |
| controlAnimationTiming         | Integer                                      | 500                                      | Animation duration for controls visibility.                                                                         |
| controlTimeoutDelay            | Integer                                      | 15000                                    | Hide controls after X milliseconds.                                                                                |
| doubleTapTime                  | Integer                                      | 130                                      | Time in ms to detect a double tap.                                                                                 |
| isFullscreen                   | Boolean                                      | false                                    | Fullscreen state of the VideoPlayer.                                                                               |
| rewindTime                     | Integer                                      | 15                                       | Number of seconds to rewind or forward.                                                                            |
| seekColor                      | String(#HEX)                                | '#FFF'                                   | Seekbar color.                                                                                                     |
| showDuration                   | Boolean                                      | false                                    | Show media duration.                                                                                               |
| showOnStart                    | Boolean                                      | false                                    | Show or hide controls on first render.                                                                             |
| showOnEnd                      | Boolean                                      | false                                    | Show or hide controls when video ends.                                                                             |
| showTimeRemaining              | Boolean                                      | false                                    | Show remaining time instead of current time.                                                                      |
| showHours                      | Boolean                                      | false                                    | Show time in hours.                                                                                                |
| tapAnywhereToPause             | Boolean                                      | false                                    | Tap anywhere to toggle play/pause.                                                                                |
| toggleResizeModeOnFullscreen   | Boolean                                      | false                                    | Toggle resize mode between cover/contain on fullscreen.                                                           |
| disableFullscreen              | Boolean                                      | false                                    | Hide fullscreen button.                                                                                            |
| disablePlayPause               | Boolean                                      | false                                    | Hide play/pause toggle.                                                                                            |
| disableSeekButtons             | Boolean                                      | false                                    | Hide rewind/forward buttons.                                                                                       |
| disableSeekbar                 | Boolean                                      | false                                    | Hide seekbar.                                                                                                      |
| disableVolume                  | Boolean                                      | false                                    | Hide volume control.                                                                                               |
| disableTimer                   | Boolean                                      | false                                    | Hide timer.                                                                                                        |
| disableBack                    | Boolean                                      | false                                    | Hide back button.                                                                                                  |
| disableOverlay                 | Boolean                                      | false                                    | Hide transparent overlay when controls are shown.                                                                 |

### Events

| Callback          | Description                                                    |
|-------------------|----------------------------------------------------------------|
| onEnterFullscreen | Triggered when fullscreen mode is activated.                 |
| onExitFullscreen  | Triggered when fullscreen mode is exited.                     |
| onHideControls    | Triggered when controls disappear.                            |
| onShowControls    | Triggered when controls appear.                               |
| onError           | Triggered when an error occurs.                               |
| onPause           | Triggered when video is paused.                               |
| onPlay            | Triggered when video starts playing.                          |
| onBack            | Triggered when back button is pressed.                        |
| onEnd             | Triggered when video ends.                                    |

## 🎃 License

> 🎃 This project is released under the [MIT License](LICENSE).
> 💻 By contributing, you agree that your contributions will be licensed under its MIT License.

