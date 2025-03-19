import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
interface OSSupport {
    children: ReactNode;
    containerStyles: StyleProp<ViewStyle>;
    onScreenTouch: () => void;
    showControls: boolean;
    testID?: string;
}
export declare const PlatformSupport: ({ children, onScreenTouch, containerStyles, showControls, testID, }: OSSupport) => JSX.Element;
export {};
