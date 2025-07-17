## Props

| Prop                | Type        | Description                                                                 |
|---------------------|-------------|-----------------------------------------------------------------------------|
| `disableResolution` | `boolean`   | Set to `true` to disable the resolution switching UI in the media console. |
| `videoUrls`         | `object[]`  | Array of video sources with different resolutions. See the example below.  |

### Example

```js
const videoUrls = [
  { rendition: "https://example.com/video_720p.mp4", quality: "720p" },
  { rendition: "https://example.com/video_1080p.mp4", quality: "1080p" },
];
