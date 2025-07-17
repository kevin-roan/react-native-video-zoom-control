import { Dispatch, SetStateAction } from 'react';
interface PanRespondersProps {
    duration: number;
    seekerOffset: number;
    volumeOffset: number;
    loading: boolean;
    seeking: boolean;
    seekerPosition: number;
    seek?: (time: number, tolerance?: number) => void;
    seekerWidth: number;
    clearControlTimeout: () => void;
    setVolumePosition: (position: number) => void;
    setSeekerPosition: (position: number) => void;
    setSeeking: Dispatch<SetStateAction<boolean>>;
    setControlTimeout: () => void;
    onEnd: () => void;
    horizontal?: boolean;
    inverted?: boolean;
}
export declare const usePanResponders: ({ duration, seekerOffset, volumeOffset, loading, seeking, seekerPosition, seek, seekerWidth, clearControlTimeout, setVolumePosition, setSeekerPosition, setSeeking, setControlTimeout, onEnd, horizontal, inverted, }: PanRespondersProps) => {
    volumePanResponder: import("react-native").PanResponderInstance;
    seekPanResponder: import("react-native").PanResponderInstance;
};
export {};
