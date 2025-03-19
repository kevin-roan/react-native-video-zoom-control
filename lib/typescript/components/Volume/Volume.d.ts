/// <reference types="react" />
import { GestureResponderHandlers } from 'react-native';
interface VolumeProps {
    volumeFillWidth: number;
    volumeTrackWidth: number;
    volumePosition: number;
    volumePanHandlers: GestureResponderHandlers;
}
export declare const Volume: ({ volumeFillWidth, volumePosition, volumeTrackWidth, volumePanHandlers, }: VolumeProps) => JSX.Element;
export {};
