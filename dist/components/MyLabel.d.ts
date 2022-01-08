/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Label to show in the component
     */
    label: string;
    /**
     * Size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Color de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Texto capitalizado
     */
    allCaps?: boolean;
    /**
     * What font text color to use
     */
    fontColor?: string;
    /**
     * Set the background color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
