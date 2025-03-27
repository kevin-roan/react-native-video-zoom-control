interface FullscreenProps {
    isFullscreen: boolean;
    toggleFullscreen: () => void;
    resetControlTimeout: () => void;
    showControls: boolean;
}
export declare const Fullscreen: ({ isFullscreen, toggleFullscreen, resetControlTimeout, showControls, }: FullscreenProps) => any;
export {};
