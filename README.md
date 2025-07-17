## Props

| Prop                | Type        | Description                                                                 |
|---------------------|-------------|-----------------------------------------------------------------------------|
| `disableResolution` | `boolean`   | Set to `true` to disable the resolution switching UI in the media console. |
| `videoUrls`         | `object[]`  | Array of video sources with different resolutions. See the example below.  |
| `disableAllControls`         | `Set to `true` if you want to disable all the visible controls.  |


### Example

```js
const videoUrls = [
  { rendition: "https://example.com/video_720p.mp4", quality: "720p" },
  { rendition: "https://example.com/video_1080p.mp4", quality: "1080p" },
];


### Thanks
- https://github.com/LunatiqueCoder/react-native-media-console
- https://github.com/openspacelabs/react-native-zoomable-view
