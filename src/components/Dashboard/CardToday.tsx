import { FC } from "react";
import Button from "../Button";

interface CardTodayProps {}

const CardToday: FC<CardTodayProps> = () => {
	return (
		<>
			<div className="card--today--header">
				<h4 className="mb-6 text-lg font-extrabold text-slate-800">APPROVAL REQUEST</h4>
			</div>
			<div className="card--today--container grid grid-cols-12 gap-5">
				<div className="card--today--left col-span-3">
					<div className="card--today--number text-8xl font-bold text-slate-400">4</div>
				</div>
				<div className="card--today--left col-span-9">
					<div className="card--today--treatments">
						<div className="card--today--treatment relative mb-4 rounded-lg bg-slate-100 p-4">
							<div className="card--today--treatment--content flex justify-between">
								<div className="left">
									<h6 className="text-xs text-slate-500">Treatment</h6>
									<h4 className="text-base font-bold text-slate-800">
										Open Access
									</h4>
								</div>
								<div className="right absolute top-3 right-3 text-xs text-zinc-700">
									09:00 - 11:00
								</div>
							</div>
						</div>
						<div className="card--today--treatment relative mb-4 rounded-lg bg-slate-100 p-4">
							<div className="card--today--treatment--content flex justify-between">
								<div className="left">
									<h6 className="text-xs text-slate-500">Treatment</h6>
									<h4 className="text-base font-bold text-slate-800">
										Open Access
									</h4>
								</div>
								<div className="right absolute top-3 right-3 text-xs text-zinc-700">
									09:00 - 11:00
								</div>
							</div>
						</div>
						<div className="card--today--treatment relative rounded-lg bg-slate-100 p-4 last:mb-0">
							<div className="card--today--treatment--content flex justify-between">
								<div className="left">
									<h6 className="text-xs text-slate-500">Treatment</h6>
									<h4 className="text-base font-bold text-slate-800">
										Open Access
									</h4>
								</div>
								<div className="right absolute top-3 right-3 text-xs text-zinc-700">
									09:00 - 11:00
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Button classes="w-[170px] mt-6" hasIconGo>
				More
			</Button>
		</>
	);
};

export default CardToday;
