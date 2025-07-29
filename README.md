## Installation

```bash
npm install react-native-video-zoom-control react-native-video

```

> Dependancies

```bash
npm install react-native-video
npm i @openspacelabs/react-native-zoomable-view

```

## Usage

```javascript
import VideoPlayer from "react-native-video-zoom-control";

const App = () => {
  const videoUrls = [
    { rendition: "https://example.com/video_720p.mp4", quality: "720p" },
    { rendition: "https://example.com/video_1080p.mp4", quality: "1080p" },
  ];

  return (
    <VideoPlayer
      videoUrls={videoUrls}
      disableResolution={false}
      disableZoom={false} // experimental
      disableAllControls={false}
      // it also accepts all the props from react-native-video
    />
  );
};
```

## Props

You can pass any of the props that the <Video /> component at react-native-video takes. Simply add them onto the <VideoPlayer /> and it will pass them through to the <Video /> component.

Additional Props by react-native-video-zoom-control

| Prop                 | Type       | Description                                                                |
| -------------------- | ---------- | -------------------------------------------------------------------------- |
| `disableResolution`  | `boolean`  | Set to `true` to disable the resolution switching UI in the media console. |
| `videoUrls`          | `object[]` | Array of video sources with different resolutions. See the example below.  |
| `disableAllControls` | `boolean`  | `Set to `true` if you want to disable all the visible controls.            |

Since this is built on top of `react-native-media-console`, `<VideoPlayer />` also takes these props,

| Prop                         | Type                                          | Default                                  | Description                                                                                                                                                            |
| ---------------------------- | --------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| alwaysShowControls           | Boolean                                       | false                                    | Always show controls.                                                                                                                                                  |
| controlAnimationTiming       | Integer                                       | 500                                      | The amount of time (in milliseconds) to animate the controls in and out.                                                                                               |
| controlTimeoutDelay          | Integer                                       | 15000                                    | Hide controls after X amount of time in milliseconds                                                                                                                   |     |
| doubleTapTime                | Integer                                       | 130                                      | Tapping twice within this amount of time in milliseconds is considered a double tap. Single taps will not be actioned until this time has expired.                     |
| isFullscreen                 | Boolean                                       | false                                    | The VideoPlayer fullscreen state                                                                                                                                       |
| navigator                    | Navigator                                     | null                                     | When using the default React Native navigator and do not override the `onBack` function, you'll need to pass the navigator to the VideoPlayer for it to function       |
| rewindTime                   | Integer                                       | 15                                       | Number of seconds to rewind or forward.                                                                                                                                |
| seekColor                    | String(#HEX)                                  | '#FFF'                                   | Fill/handle colour of the seekbar                                                                                                                                      |
| showDuration                 | Boolean                                       | false                                    | Show duration of the media.                                                                                                                                            |
| showOnStart                  | Boolean                                       | false                                    | Show or hide the controls on first render                                                                                                                              |
| showOnEnd                    | Boolean                                       | false                                    | Show or hide the controls on end of video                                                                                                                              |
| showTimeRemaining            | Boolean                                       | false                                    | If true, show the time remaing, else show the current time in the Player.                                                                                              |
| showHours                    | Boolean                                       | false                                    | If true, convert time to hours in the Player                                                                                                                           |
| tapAnywhereToPause           | Boolean                                       | false                                    | If true, single tapping anywhere on the video (other than a control) toggles between playing and paused.                                                               |
| toggleResizeModeOnFullscreen | Boolean                                       | false                                    | If true, clicking the fullscreen button will toggle the `<Video />` component between cover/contain, set to false if you want to customize fullscreen behaviour        |
| containerStyle               | ViewStyle                                     |                                          | StyleSheet passed to the container of the <Video /> component                                                                                                          |
| videoStyle                   | ViewStyle                                     |                                          | StyleSheet passed to the <Video /> component                                                                                                                           |
| videoRef                     | Video                                         | undefined                                | Pass ref to the `<Video/>` component                                                                                                                                   |
| pan                          | `{ horizontal: Boolean, inverted: Boolean } ` | `{ horizontal: true, inverted: false } ` | An object allowing fine grained control over the `PanResponder` controlling the volume and seek. Use this if you need to apply rotation transformations to the player. |

### Events

These are various events that you can hook into and fire functions on in the component:

| Callback          | Description                                                                     |
| ----------------- | ------------------------------------------------------------------------------- |
| onEnterFullscreen | Fired when the video enters fullscreen after the fullscreen button is pressed   |
| onExitFullscreen  | Fired when the video exits fullscreen after the fullscreen button is pressed    |
| onHideControls    | Fired when the controls disappear                                               |
| onShowControls    | Fired when the controls appear                                                  |
| onError           | Fired when an error is encountered when loading the video                       |
| onPause           | Fired when the video is paused after the play/pause button is pressed           |
| onPlay            | Fired when the video begins playing after the play/pause button is pressed      |
| onBack            | Function fired when back button is pressed, override if using custom navigation |
| onEnd             | Fired when the video is complete                                                |

### Controls

These are the various controls that you can turn on/off as needed. All of these props default to false, override them to
disable any controls

| Control            | Description                                                                                                                         |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| disableFullscreen  | Hide the fullscreen button                                                                                                          |
| disablePlayPause   | Hide the play/pause toggle and the rewind/forward buttons                                                                           |
| disableSeekButtons | Hide the rewind/forward buttons (but not play/pause)                                                                                |
| disableSeekbar     | Hide the seekbar                                                                                                                    |
| disableVolume      | Hide the Volume control                                                                                                             |
| disableTimer       | Hide the timer                                                                                                                      |
| disableBack        | Hide the back button                                                                                                                |
| disableOverlay     | Hide the transparent overlay which is active when the controls are shown. Generally used when you want to disable all the controls. |

### Thanks

- https://github.com/LunatiqueCoder/react-native-media-console
- https://github.com/openspacelabs/react-native-zoomable-view
