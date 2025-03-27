import * as React from "react";
interface VideoResolutionProps {
    handleResolutionModalOpen: () => void;
}
interface ResolutionModalProps {
    videoUrls: string[];
    handleSource: (source: string) => void;
}
export declare const VideoResolution: React.FC<VideoResolutionProps>;
export declare const ResolutionModal: React.FC<ResolutionModalProps>;
export default VideoResolution;
