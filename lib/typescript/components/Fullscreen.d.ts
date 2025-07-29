/// <reference types="react" />
interface FullscreenProps {
    isFullscreen: boolean;
    toggleFullscreen: () => void;
    resetControlTimeout: () => void;
    showControls: boolean;
}
export declare const Fullscreen: ({ isFullscreen, toggleFullscreen, resetControlTimeout, showControls, }: FullscreenProps) => JSX.Element;
export {};
