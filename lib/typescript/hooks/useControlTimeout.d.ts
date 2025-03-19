/// <reference types="react-native" />
/// <reference types="node" />
import { Dispatch, SetStateAction } from 'react';
interface ControlTimeoutProps {
    controlTimeout: ReturnType<typeof setTimeout>;
    controlTimeoutDelay: number;
    mounted: boolean;
    showControls: boolean;
    setShowControls: Dispatch<SetStateAction<boolean>>;
    alwaysShowControls: boolean;
}
export declare const useControlTimeout: ({ controlTimeout, controlTimeoutDelay, mounted, showControls, setShowControls, alwaysShowControls, }: ControlTimeoutProps) => {
    clearControlTimeout: () => void;
    resetControlTimeout: () => void;
    hideControls: () => void;
    setClearTimeout: Dispatch<SetStateAction<boolean | undefined>>;
    setControlTimeout: () => void;
};
export {};
