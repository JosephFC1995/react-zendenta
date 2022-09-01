import React, { FC } from "react";
import Card from "~/components/Card";
import "@/assets/scss/views/dashboard.scss";
import CardInfo from "~/components/Dashboard/CardInfo";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
	return (
		<>
			<div className="dashboard--cards flex">
				<Card classes="card-chart" solid>
					Chart
				</Card>
				<Card classes="card-info">
					<CardInfo />
				</Card>
                <Card classes="card-today">
					a
				</Card>
                <Card classes="card-top">
					a
				</Card>
                <Card classes="card-patient">
					a
				</Card>
                <Card classes="card-balance">
					a
				</Card>
			</div>
		</>
	);
};

export default Dashboard;
