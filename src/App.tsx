import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
	return (
		<div className="bg-slate-800 h-screen">
			<div className="animate-spin-25s fixed top-[10rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] bg-[#4d2d2d] z-0"></div>
			<div className="animate-spin-25s fixed top-[-1rem] left-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] dark:bg-[#283064bf] z-0"></div>

			<div className="relative z-10">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
