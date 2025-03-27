interface BackProps {
    onBack: () => void;
    resetControlTimeout?: () => void;
    showControls: boolean;
}
export declare const Back: ({ onBack, showControls }: BackProps) => any;
export {};
