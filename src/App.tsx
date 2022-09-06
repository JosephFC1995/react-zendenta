import { Outlet } from "react-router-dom";
import Header from "./components/General/Header";
import Sidebar from "./components/General/Sidebar";

const App = () => {
	return (
		<>
			<div className="app app--main flex">
				<Sidebar />
				<main className="flex-1 bg-slate-100">
					<Header />
					<div className="main--content p-8">
						<Outlet />
					</div>
				</main>
			</div>
		</>
	);
};

export default App;
