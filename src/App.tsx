import Header from "./components/General/Header";
import Sidebar from "./components/General/Sidebar";
import Dashboard from "./views/Dashboard";

const App = () => {
	return (
		<>
			<div className="app app--main flex">
				<Sidebar />
				<main className="flex-1 bg-slate-100">
					<Header />
					<div className="main--content p-8">
						<Dashboard />
					</div>
				</main>
			</div>
		</>
	);
};

export default App;
