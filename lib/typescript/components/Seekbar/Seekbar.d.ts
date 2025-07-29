import { Dispatch, SetStateAction } from 'react';
import { GestureResponderHandlers } from 'react-native';
interface SeekbarProps {
    seekerFillWidth: number;
    seekerPosition: number;
    seekColor: string;
    seekerPanHandlers: GestureResponderHandlers;
    setSeekerWidth: Dispatch<SetStateAction<number>>;
}
export declare const Seekbar: ({ seekColor, seekerFillWidth, seekerPosition, seekerPanHandlers, setSeekerWidth, }: SeekbarProps) => JSX.Element;
export {};
