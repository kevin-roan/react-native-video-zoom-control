import React, { Dispatch, SetStateAction } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  GestureResponderHandlers,
  View,
} from "react-native";
import { Timer } from "./Timer";
import { Title } from "./Title";
import { NullControl } from "./NullControl";
import { Fullscreen } from "./Fullscreen";
import { Seekbar } from "./Seekbar";
import { calculateTime } from "../utils";
import type { VideoAnimations } from "../types";
import { styles } from "./styles";
import { VideoResolution } from "./components/VideoResolution";

interface BottomControlsProps {
  showControls: boolean;
  animations: VideoAnimations;
  panHandlers: GestureResponderHandlers;
  disableTimer: boolean;
  disableSeekbar: boolean;
  showDuration: boolean;
  showHours: boolean;
  paused: boolean;
  showTimeRemaining: boolean;
  currentTime: number;
  duration: number;
  seekColor: string;
  title: string;
  toggleTimer: () => void;
  resetControlTimeout: () => void;
  seekerFillWidth: number;
  seekerPosition: number;
  setSeekerWidth: Dispatch<SetStateAction<number>>;
  isFullscreen: boolean;
  disableFullscreen: boolean;
  disableResolution: boolean;
  toggleFullscreen: () => void;
  isResolutionModalOpen: boolean;
  handleResolutionModalOpen: () => void;
}

export const BottomControls = ({
  showControls,
  animations: { AnimatedView, ...animations },
  panHandlers,
  disableSeekbar,
  disableTimer,
  isResolutionModalOpen,
  duration,
  seekColor,
  showDuration,
  showHours,
  showTimeRemaining,
  currentTime,
  title,
  toggleTimer,
  resetControlTimeout,
  seekerFillWidth,
  seekerPosition,
  setSeekerWidth,
  isFullscreen,
  disableFullscreen,
  disableResolution,
  toggleFullscreen,
  handleResolutionModalOpen,
}: BottomControlsProps) => {
  const timerControl = disableTimer ? (
    <NullControl />
  ) : (
    <Timer
      resetControlTimeout={resetControlTimeout}
      toggleTimer={toggleTimer}
      showControls={showControls}
    >
      {calculateTime({
        showDuration,
        showHours,
        showTimeRemaining,
        time: currentTime,
        duration,
      })}
    </Timer>
  );

  const seekbarControl = disableSeekbar ? (
    <NullControl />
  ) : (
    <Seekbar
      seekerFillWidth={seekerFillWidth}
      seekerPosition={seekerPosition}
      seekColor={seekColor}
      seekerPanHandlers={panHandlers}
      setSeekerWidth={setSeekerWidth}
    />
  );

  const resolutionControl = disableResolution ? (
    <NullControl />
  ) : (
    <VideoResolution handleResolutionModalOpen={handleResolutionModalOpen} />
  );

  const fullscreenControl = disableFullscreen ? (
    <NullControl />
  ) : (
    <Fullscreen
      isFullscreen={isFullscreen}
      toggleFullscreen={toggleFullscreen}
      resetControlTimeout={resetControlTimeout}
      showControls={showControls}
    />
  );

  return (
    <AnimatedView
      style={[
        _styles.bottom,
        animations.controlsOpacity,
        animations.bottomControl,
      ]}
    >
      <ImageBackground
        source={require("../assets/img/bottom-vignette.png")}
        style={[styles.column]}
        imageStyle={[styles.vignette]}
      >
        <SafeAreaView style={[styles.row, _styles.bottomControlGroup]}>
          {timerControl}
          <Title title={title} />
          <View style={styles.bottomRightControls}>
            {!isResolutionModalOpen ? resolutionControl : null}
            {fullscreenControl}
          </View>
        </SafeAreaView>
        <SafeAreaView style={styles.seekBarContainer}>
          {seekbarControl}
        </SafeAreaView>
      </ImageBackground>
    </AnimatedView>
  );
};

const _styles = StyleSheet.create({
  bottom: {
    alignItems: "stretch",
    flex: 2,
    justifyContent: "flex-end",
  },
  bottomControlGroup: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 0,
  },
});
