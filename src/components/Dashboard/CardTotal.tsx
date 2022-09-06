import { FC } from "react";
import Button from "../Button";

interface CardTotalProps {}

const CardTotal: FC<CardTotalProps> = () => {
	return (
		<>
			<div className="card--total">
				<h4 className="mb-4 text-lg font-extrabold uppercase text-slate-800">
					Total patients this month
				</h4>
				<div className="card--today--number text-7xl font-bold text-slate-400">10</div>
				<h4 className="mb-4 mt-9 text-lg font-extrabold uppercase text-slate-800">
					Total patients this month
				</h4>
				<div className="card--today--number mb-9 text-7xl font-bold text-slate-400">
					103
				</div>
				<Button classes="w-[170px] mt-6" hasIconGo>
					More
				</Button>
			</div>
		</>
	);
};

export default CardTotal;
