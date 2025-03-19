import React from 'react';
import { GestureResponderHandlers } from 'react-native';
import type { VideoAnimations } from '../types';
interface TopControlProps {
    showControls: boolean;
    panHandlers: GestureResponderHandlers;
    animations: VideoAnimations;
    disableBack: boolean;
    disableVolume: boolean;
    volumeFillWidth: number;
    volumeTrackWidth: number;
    volumePosition: number;
    onBack: () => void;
    resetControlTimeout: () => void;
}
export declare const TopControls: React.MemoExoticComponent<({ showControls, panHandlers, animations: { AnimatedView, controlsOpacity, topControl }, disableBack, disableVolume, volumeFillWidth, volumePosition, volumeTrackWidth, onBack, resetControlTimeout, }: TopControlProps) => JSX.Element>;
export {};
