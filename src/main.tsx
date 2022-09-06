import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/assets/scss/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Calendar from "./views/Calendar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/app" element={<App />}>
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="calendar" element={<Calendar />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
