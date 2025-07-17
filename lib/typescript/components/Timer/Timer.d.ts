import { ReactNode } from 'react';
interface TimerProps {
    toggleTimer: () => void;
    resetControlTimeout: () => void;
    children: ReactNode;
    showControls: boolean;
}
export declare const Timer: ({ children, toggleTimer, resetControlTimeout, showControls, }: TimerProps) => JSX.Element;
export {};
