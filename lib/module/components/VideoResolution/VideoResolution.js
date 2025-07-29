import * as React from "react";
import { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./components/VideoResolution/styles";
const gearIcon = require("../../assets/img/gear.png");
export const VideoResolution = _ref => {
  let {
    handleResolutionModalOpen
  } = _ref;
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.container,
    onPress: () => handleResolutionModalOpen(),
    hitSlop: {
      top: 50,
      bottom: 50,
      left: 50,
      right: 50
    }
  }, /*#__PURE__*/React.createElement(Image, {
    source: gearIcon,
    style: styles.icon
  }));
};
export const ResolutionModal = _ref2 => {
  let {
    videoUrls,
    handleSource
  } = _ref2;
  const [selectedQuality, setSelectedQuality] = useState("");
  const [availableRenditions, setAvailableRenditions] = useState([]);
  React.useEffect(() => {
    if (selectedQuality !== "") {
      if (selectedQuality === "auto") {
        console.log("user selected auto", selectedQuality);
      }
      // @ts-ignore
      const matchedVideo = videoUrls.find(v => v.rendition === selectedQuality);
      // @ts-ignore
      if (matchedVideo && matchedVideo.link) {
        handleSource(matchedVideo.link);
      } else {
        handleSource("defaultSource");
      }
    }
  }, [selectedQuality]);

  // @ts-ignore
  const handleSelectedResolution = rendition => {
    console.log("selected rendition", rendition);
    setSelectedQuality(rendition);
  };
  React.useEffect(() => {
    if (availableRenditions.length === 0) {
      // @ts-ignore
      const videoRenditions = videoUrls.map(video => video["rendition"]);
      const sortedRenditions = videoRenditions.sort((a, b) => {
        const resolutionA = parseInt(a, 10);
        const resolutionB = parseInt(b, 10);
        return resolutionB - resolutionA;
      });
      // @ts-ignore
      setAvailableRenditions(sortedRenditions);
    }
  }, [availableRenditions.length]);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.modalContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.modal
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.modalHeading
  }, "Video Quality"), /*#__PURE__*/React.createElement(View, {
    style: styles.seperator
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.rendtionScrollContainer
  }, /*#__PURE__*/React.createElement(ScrollView, null, availableRenditions.map(rendition => /*#__PURE__*/React.createElement(TouchableOpacity, {
    key: rendition,
    style: [styles.modalSwitch, selectedQuality === rendition ? styles.selectedQuality : null],
    onPress: () => handleSelectedResolution(rendition)
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.modalText
  }, rendition))), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: [styles.modalSwitch, selectedQuality === "auto" ? styles.selectedQuality : null],
    onPress: () => handleSelectedResolution("auto")
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.modalText
  }, "Auto "))))));
};
export default VideoResolution;
//# sourceMappingURL=VideoResolution.js.map