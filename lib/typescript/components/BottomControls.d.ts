import { Dispatch, SetStateAction } from 'react';
import { GestureResponderHandlers } from 'react-native';
import type { VideoAnimations } from '../types';
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
    toggleFullscreen: () => void;
}
export declare const BottomControls: ({ showControls, animations: { AnimatedView, ...animations }, panHandlers, disableSeekbar, disableTimer, duration, seekColor, showDuration, showHours, showTimeRemaining, currentTime, title, toggleTimer, resetControlTimeout, seekerFillWidth, seekerPosition, setSeekerWidth, isFullscreen, disableFullscreen, toggleFullscreen, }: BottomControlsProps) => JSX.Element;
export {};
