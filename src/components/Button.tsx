import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import classNames from "classnames";
import tw from "tailwind-styled-components";

type Color = "primary" | "white";


interface ButtonStyledProps {
	$hasIconGo: boolean;
	$rounded: boolean;
	$showPointer: boolean;
}

const ButtonStyled = tw.button<ButtonStyledProps>`
    btn
    ${(p: ButtonStyledProps) => (p.$hasIconGo && "btn--append")}
    ${(p: ButtonStyledProps) => (p.$rounded && "btn--rounded")}
    ${(p: ButtonStyledProps) => (p.$showPointer && "btn--border btn--notification")}
    `;

interface ButtonProps {
	children?: any;
	icon?: any;
	rounded?: boolean;
	border?: boolean;
	hasIconGo?: boolean;
	color?: Color;
	showPointer?: boolean;
	classes?: string;
}

const Button: FC<ButtonProps> = ({
	icon,
	rounded = false,
	color,
	border,
	showPointer,
	hasIconGo,
	classes,
	...props
}) => {
	const [colorClass, setColorClass] = useState("");

	useEffect(() => {
		if (color !== undefined) return setColorClass(`btn--${color}`);
		setColorClass(`btn--default`);
	}, [color]);

	return (
		<>
			<ButtonStyled
				className={classNames(colorClass, classes)}
				$hasIconGo={hasIconGo}
				$rounded={rounded}
				$showPointer={showPointer}
			>
				{icon ? icon : null}
				{showPointer && <div className="pointer"></div>}
				{props.children ? props.children : null}
				{hasIconGo ? (
					<div className="btn--append--icon">
						<IconGgArrowRight />
					</div>
				) : null}
			</ButtonStyled>
		</>
	);
};

export default Button;
