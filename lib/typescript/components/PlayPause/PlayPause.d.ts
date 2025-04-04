import type { VideoAnimations } from '../../types';
export declare const playPauseRef: any;
interface PlayPauseProps {
    animations: VideoAnimations;
    disablePlayPause: boolean;
    disableSeekButtons: boolean;
    paused: boolean;
    togglePlayPause: () => void;
    resetControlTimeout: () => void;
    showControls: boolean;
    onPressForward: () => void;
    onPressRewind: () => void;
}
export declare const PlayPause: ({ animations: { AnimatedView, ...animations }, disablePlayPause, disableSeekButtons, paused, togglePlayPause, resetControlTimeout, showControls, onPressForward, onPressRewind, }: PlayPauseProps) => any;
export {};
