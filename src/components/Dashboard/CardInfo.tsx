import { FC, useEffect } from "react";
import Button from "../Button";

interface CardInfoProps {}

const CardInfo: FC<CardInfoProps> = () => {
	useEffect(() => {
		console.log("Mounted ...");
	});

	return (
		<>
			<div className="card--info--top flex gap-10 border-b-[1px]">
				<div className="card--info--top--l border-r-[1px] pr-10 pb-5">
					<h4 className="mb-6 text-lg font-extrabold text-slate-800">APPROVAL REQUEST</h4>
					<h3 className="mb-3 text-6xl text-slate-400">26</h3>
					<p className="my-0 mb-[40px] py-0 text-lg capitalize text-slate-400">
						Request waiting to approve
					</p>
					<Button classes="w-[170px]" hasIconGo>
						More
					</Button>
				</div>
				<div className="card--info--top--r pb-5">
					<h4 className="mb-6 text-lg font-extrabold uppercase text-slate-800">
						Upcoming appoinment
					</h4>
					<h3 className="mb-3 text-6xl text-slate-400">14</h3>
					<p className="my-0 mb-[40px] py-0 text-lg capitalize text-slate-400">·</p>
					<Button classes="w-[170px]" hasIconGo>
						More
					</Button>
				</div>
			</div>
			<div className="card--info--bottom pt-6 text-slate-400">
				<h4 className="mb-6 text-lg font-extrabold text-slate-800">CLINIC INFORMATION</h4>
				<div className="card--info--list mb-9">
					<div className="card--info--item mb-4 flex gap-11">
						<div className="card--info--icon">
							<IconGgPiano />
						</div>
						<div className="card--info--data">
							<p className="mb-0 pb-0">
								7898 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Minus, ex.
							</p>
						</div>
					</div>
					<div className="card--info--item flex gap-11">
						<div className="card--info--icon">
							<IconGgSmartphone />
						</div>
						<div className="card--info--data">
							<p className="mb-0 pb-0">(205) 5505-1100 · (262) 555-0131</p>
						</div>
					</div>
				</div>
				<Button classes="w-[170px]" hasIconGo>
					More
				</Button>
			</div>
		</>
	);
};

export default CardInfo;
