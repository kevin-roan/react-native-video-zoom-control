import * as React from "react";
import { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "react-native-media-console/src/components/VideoResolution/styles";
const gearIcon = require("../../assets/img/gear.png");

interface VideoResolutionProps {
  handleResolutionModalOpen: () => void;
}

interface ResolutionModalProps {
  videoUrls: string[];
  handleSource: (source: string) => void;
}

export const VideoResolution: React.FC<VideoResolutionProps> = ({
  handleResolutionModalOpen,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleResolutionModalOpen()}
      hitSlop={{
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      }}
    >
      <Image source={gearIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export const ResolutionModal: React.FC<ResolutionModalProps> = ({
  videoUrls,
  handleSource
}) => {
  const [selectedQuality, setSelectedQuality] = useState("");
  const [availableRenditions,setAvailableRenditions] = useState([]);


  React.useEffect(() => {
    if (selectedQuality !== "") {
      if (selectedQuality === 'auto'){
        console.log('user selected auto',selectedQuality)
      }
      // @ts-ignore
      const matchedVideo = videoUrls.find(v=>v.rendition   === selectedQuality)
      // @ts-ignore
    if (matchedVideo && matchedVideo.link) {
      handleSource(matchedVideo.link);
    } else {
      handleSource('defaultSource');
      }
    }
  }, [selectedQuality]);


  // @ts-ignore
  const handleSelectedResolution = (rendition) => {
    console.log('selected rendition',rendition)
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

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
        <Text style={styles.modalHeading}>Video Quality</Text>
        <View style={styles.seperator}></View>
        <View style={styles.rendtionScrollContainer}>
        <ScrollView>
          {
            availableRenditions.map((rendition) => (
              <TouchableOpacity
                key={rendition}
                style={[
                  styles.modalSwitch,
                  selectedQuality === rendition? styles.selectedQuality : null,
                ]}
                onPress={() => handleSelectedResolution(rendition)}
              >
                <Text style={styles.modalText}>{rendition}</Text>
              </TouchableOpacity>
            ))}
          <TouchableOpacity
            style={[
              styles.modalSwitch,
              selectedQuality === "auto" ? styles.selectedQuality : null,
            ]}
            onPress={() => handleSelectedResolution("auto")}
          >
            <Text style={styles.modalText}>Auto </Text>
          </TouchableOpacity>
        </ScrollView>

        </View>
      </View>
    </View>
  );
};

export default VideoResolution;
