export declare const _onBack: (navigator: any) => () => any;
export declare const calculateTime: (args: FormatTime) => string;
interface FormatTime {
    time?: number;
    duration: number;
    showDuration: boolean;
    showTimeRemaining: boolean;
    showHours: boolean;
}
export {};
