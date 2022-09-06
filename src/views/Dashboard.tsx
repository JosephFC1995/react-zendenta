import { FC } from "react";
import Card from "~/components/Card";
import CardDollars from "~/components/Dashboard/CardDollars";
import CardInfo from "~/components/Dashboard/CardInfo";
import CardToday from "~/components/Dashboard/CardToday";
import CardTop from "~/components/Dashboard/CardTop";
import CardTotal from "~/components/Dashboard/CardTotal";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
	return (
		<>
			<div className="dashboard--cards grid grid-cols-12 gap-4 font-sans">
				<Card classes="card-chart col-span-7" solid>
					Chart
				</Card>
				<Card classes="card-info col-span-5">
					<CardInfo />
				</Card>
				<Card classes="card-today col-span-3">
					<CardToday />
				</Card>
				<Card classes="card-top col-span-3">
					<CardTop />
				</Card>
				<Card classes="card-patient col-span-3">
					<CardTotal />
				</Card>
				<Card classes="card-balance col-span-3">
					<CardDollars />
				</Card>
			</div>
		</>
	);
};

export default Dashboard;
