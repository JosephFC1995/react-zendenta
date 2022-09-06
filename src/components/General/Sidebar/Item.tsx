import { FC } from "react";
import { NavLink } from "react-router-dom";
import slugify from "slugify";
import { useTransition } from "transition-hook";
import type { To } from "react-router";
import classNames from "classnames";

interface SidebarItemProps {
	key?: any;
	title: string;
	icon: any;
	sidebarCollapse?: boolean;
	to: To;
}

const SidebarItem: FC<SidebarItemProps> = ({
	title,
	icon,
	sidebarCollapse = false,
	to,
	...props
}) => {
	const { stage, shouldMount } = useTransition(!sidebarCollapse, 500);
	return (
		<>
			<div
				className="sidebar--middler--item mb-3 cursor-pointer text-slate-700 transition-all ease-in-out "
				data-link={slugify(title, { lower: true })}
			>
				<NavLink
					to={to}
					className={({ isActive }) =>
						classNames(
							"flex min-h-[60px] items-center gap-2 px-5 hover:bg-blue-700 hover:text-white",
							{
								"bg-blue-700 text-white": isActive,
							}
						)
					}
				>
					{icon}
					{shouldMount && (
						<span
							className={`mb-[1px] font-bold ${
								stage === "enter" ? "animate-fade" : "hidden"
							}`}
						>
							{title}
						</span>
					)}
				</NavLink>
			</div>
		</>
	);
};

export default SidebarItem;
