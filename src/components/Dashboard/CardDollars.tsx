import { FC } from "react";
import Button from "../Button";

interface CardDollarsProps {}

const CardDollars: FC<CardDollarsProps> = () => {
	return (
		<>
			<h4 className="mb-6 text-lg font-extrabold uppercase text-slate-800">Jaspel</h4>
			<div className="card--today--number mb-5 text-5xl font-medium text-slate-700">
				$10,000
			</div>
			<div className="card--today--number text-xl font-medium capitalize text-gray-400">
				This month so far
			</div>
			<hr className="my-6" />
			<div className="card--today--number mb-5 text-5xl font-medium text-slate-700">
				$35,000
			</div>
			<div className="card--today--number text-xl font-medium capitalize text-gray-400">
				Previous month
			</div>
			<Button classes="w-[170px] mt-6" hasIconGo>
				More
			</Button>
		</>
	);
};

export default CardDollars;
