import { ReactNode, RefObject } from 'react';
import { TouchableHighlight, ViewProps } from 'react-native';
interface ControlProps extends ViewProps {
    children: ReactNode;
    callback?: () => void;
    controlRef?: RefObject<TouchableHighlight>;
    disabled?: boolean;
    style?: any;
    resetControlTimeout?: () => void;
}
export declare const Control: ({ children, callback, controlRef, disabled, style, ...props }: ControlProps) => JSX.Element;
export {};
