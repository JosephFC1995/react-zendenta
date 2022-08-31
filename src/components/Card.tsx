import { FC } from "react";

interface CardProps {
    classes?: string;
    solid?: boolean;
    rounded?: boolean;
    children?: any
}

const Card: FC<CardProps> = ({ classes, solid = false, rounded = false, ...props }) => {
    return (
        <>
            <div className={`card p-8 ${classes}${solid ? " bg-slate-800 text-white" : " bg-white text-slate-800"}${rounded ? " rounded-lg" : ""}`}>
                {props.children}
            </div>
        </>
    );
}

export default Card;
