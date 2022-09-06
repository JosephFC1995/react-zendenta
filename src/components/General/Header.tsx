import { FC, useEffect } from "react";
import Button from "@/components/Button";
import { useLocation } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
	const location = useLocation();

	useEffect(() => {
		console.log(location);
	}, [location]);

	return (
		<>
			<header className="header header--page flex min-h-[80px] w-full items-center justify-between border-b-[1px] border-b-slate-200 bg-slate-100 px-8">
				<div className="header--left flex items-center gap-3">
					<IconGgChart className="text-2xl text-blue-700" />
					<h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>
				</div>

				<div className="header--right flex items-center gap-4">
					<div className="header--search">
						<div className="header--search--container flex w-[200px] items-center gap-2 rounded-full border-[1.5px] border-slate-300 p-2">
							<IconGgSearch className="flex-none text-slate-300" />
							<input
								type="text"
								placeholder="Search"
								className="w-full bg-transparent font-bold text-slate-400 outline-none placeholder:font-bold placeholder:text-slate-500"
							/>
						</div>
					</div>
					<div className="header--add flex gap-4">
						<Button icon={<IconGgMathPlus />} rounded color="primary" />
						<Button
							icon={<IconGgNotifications />}
							rounded
							color="white"
							showPointer
							border
						/>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
