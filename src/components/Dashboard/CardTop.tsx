import { FC } from "react";
import Button from "../Button";

interface CardTopProps {}

const CardTop: FC<CardTopProps> = () => {
	return (
		<>
			<div className="card--top--header">
				<h4 className="mb-6 text-lg font-extrabold uppercase text-slate-800">
					Top treatment
				</h4>
				<ul className="card--top--container list-inside list-decimal">
					<li className="mb-4 text-lg text-slate-800">Consultation</li>
					<li className="mb-4 text-lg text-slate-800">Scaling</li>
					<li className="mb-4 text-lg text-slate-800">Root Canal</li>
					<li className="mb-4 text-lg text-slate-800">Bleaching</li>
					<li className="mb-4 text-lg text-slate-800">Wisdom Teeth Removal</li>
					<li className="mb-4 text-lg text-slate-800">Open Access</li>
				</ul>
			</div>
			<Button classes="w-[170px] mt-6" hasIconGo>
				More
			</Button>
		</>
	);
};

export default CardTop;
