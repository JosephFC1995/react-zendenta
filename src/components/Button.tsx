import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import "@/assets/scss/components/button.scss"

type Color = "primary" | "white";

interface ButtonProps {
    children?: any,
    icon?: any,
    rounded?: boolean,
    border?: boolean,
    hasIconGo?: boolean,
    color?: Color,
    showPointer?: boolean,
    classes?: string,
}

const Button: FC<ButtonProps> = ({ icon, rounded = false, color, border, showPointer, hasIconGo, classes, ...props }) => {

    const [colorClass, setColorClass] = useState("");

    useEffect(() => {
        if (color !== undefined) return setColorClass(`btn--${color}`);
        setColorClass(`btn--default`)
    }, [color])

    return (
        <>
            <div className={`btn${colorClass ? " " + colorClass : ""}${hasIconGo ? " btn--append justify-between" : ""}${rounded ? " btn--rounded" : ""}${border ? " btn--border" : ""}${showPointer ? " btn--notification" : ""}${classes ? " " + classes : ""}`}>
                {rounded}
                {icon ? icon : null}
                {showPointer && <div className="pointer"></div>}
                {props.children ? props.children : null}
                {hasIconGo ?
                    <div className="btn--append--icon">
                        <IconGgArrowRight />
                    </div> :
                    null}
            </div>
        </>
    );
}

export default Button;
