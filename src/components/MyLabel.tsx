import './mylabel.css';

export interface MyLabelProps {
    /**
     * Label to show in the component
     */
    label: string,
    /**
     * Size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3',
    /**
     * Color de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary',
    /**
     * Texto capitalizado
     */
    allCaps?: boolean,
    /**
     * What font text color to use
     */
    fontColor?: string,
    /**
     * Set the background color
     */
    backgroundColor?: string,
}

export const MyLabel = ({
    label = "Label",
    size = "normal",
    color = "primary",
    allCaps = false,
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color} ${allCaps && 'text-upper'}`} style={{color: fontColor, backgroundColor}}>
            {label}
        </span>
    )
}
