import { FC } from "react";
import classNames from "classnames";
import tw from "tailwind-styled-components";

interface CardStyledProps {
	$solid: boolean;
	$rounded: boolean;
}

const CardStyled = tw.div<CardStyledProps>`
    ${(p: CardStyledProps) => (p.$solid ? "bg-slate-800 text-white" : "bg-white text-slate-800")}
    ${(p: CardStyledProps) => p.$rounded && "rounded-lg"}
    `;

interface CardProps {
	classes?: string;
	solid?: boolean;
	rounded?: boolean;
	children?: any;
}

const Card: FC<CardProps> = ({ classes, solid = false, rounded = false, ...props }) => {
	return (
		<>
			<CardStyled
				className={classNames("card", "p-8", classes)}
				$solid={solid}
				$rounded={rounded}
			>
				{props.children}
			</CardStyled>
		</>
	);
};

export default Card;
