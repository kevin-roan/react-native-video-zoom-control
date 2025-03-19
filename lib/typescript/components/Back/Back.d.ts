/// <reference types="react" />
interface BackProps {
    onBack: () => void;
    resetControlTimeout?: () => void;
    showControls: boolean;
}
export declare const Back: ({ onBack, showControls }: BackProps) => JSX.Element;
export {};
