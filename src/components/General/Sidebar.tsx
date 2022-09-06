import { FC, useState } from "react";
import tw from "tailwind-styled-components";
import SidebarItem from "./Sidebar/Item";

interface ContainerProp {
	$collapse: boolean;
}
const Container = tw.div<ContainerProp>`
    sticky top-0 inline-flex h-screen w-[250px] min-w-[250px] flex-col overflow-y-auto
    ${(p: ContainerProp) =>
		p.$collapse ? "sidebar--collapse w-[55px] min-w-[55px]" : "sidebar--nocollapse"}
`;

interface SidebarProps {}

interface Links {
	title: string;
	icon: any;
	to: string;
}

const Sidebar: FC<SidebarProps> = () => {
	const links: Links[] = [
		{
			title: "Overview",
			icon: <IconGgChart />,
			to: "/app/dashboard",
		},
		{
			title: "Calendar",
			icon: <IconGgCalendarToday />,
			to: "/app/calendar",
		},
		{
			title: "Patients Lists",
			icon: <IconGgUser />,
			to: "/app/patients",
		},
		{
			title: "Messages",
			icon: <IconGgComment />,
			to: "/app/messages",
		},
		{
			title: "Payment information",
			icon: <IconGgDollar />,
			to: "/app/payments",
		},
		{
			title: "Settings",
			icon: <IconGgWebsite />,
			to: "/app/settings",
		},
	];

	const [isCollapse, setCollapse] = useState(false);

	function handleClickMenu() {
		setCollapse(!isCollapse);
	}

	return (
		<>
			<Container $collapse={isCollapse} className="sidebar transition-all ease-in-out">
				<div className="sidebar--top flex h-[80px] min-h-[80px] items-center justify-between gap-2 border-b-[1px] border-b-slate-200 bg-white px-4">
					{!isCollapse && (
						<div className="sidebar--logo p-2">
							<img src="/images/logo.png" alt="Logo" className="h-[50px]" />
						</div>
					)}
					<IconGgMenu
						className="cursor-pointer text-xl text-slate-500"
						onClick={handleClickMenu}
					/>
				</div>
				<div className="sidebar--middler flex flex-1 flex-col justify-between bg-white">
					<div className="sidebar--middler--list">
						{links.map(({ title, icon, to }, index) => (
							<SidebarItem
								key={index}
								title={title}
								icon={icon}
								sidebarCollapse={isCollapse}
								to={to}
							/>
						))}
					</div>
					<div className="sidebar--middler--help">
						<div
							className="sidebar--middler--item mb-3 cursor-pointer text-slate-400 transition-all ease-in-out hover:bg-slate-800 hover:text-white"
							data-link="helper"
						>
							<a href="#" className="flex min-h-[60px] items-center gap-2 px-5">
								<IconGgInfo />
								{!isCollapse && <span className="mb-[1px] font-bold">Help ?</span>}
							</a>
						</div>
					</div>
				</div>
				<div className="sidebar--bottom cursor-pointer border-t-[1px] border-t-slate-100 bg-white pb-6 pt-4">
					<div className="sidebar--bottom--user flex items-center gap-3 px-4">
						<div className="sidebar--buttom--image relative">
							<img
								src="https://i.pravatar.cc/350?img=11"
								alt="User"
								className="w-[50px] max-w-full rounded-full"
							/>
						</div>
						{!isCollapse && (
							<>
								<div className="sidebar--button--info flex-1">
									<h4 className="font-bold text-slate-700">Drg. Adam H.</h4>
									<p className="mb-0 pb-0 text-sm text-slate-400">Dentis</p>
								</div>
								<div className="sidebar--button--action text-slate-700">
									<IconGgSelect />
								</div>
							</>
						)}
					</div>
				</div>
			</Container>
		</>
	);
};

export default Sidebar;
