import { Route, Routes } from "react-router-dom";
import Accardions from "./components/Accardions";
import { Toaster } from "react-hot-toast";
import Navbar, { ResponsiveNavbar } from "./components/Header";

function App() {
	return (
		<div className="h-screen md:h-full bg-slate-800 overflow-x-hidden select-none">
			<div className="fixed top-[10rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] bg-[#4d2d2d] z-0"></div>
			<div className="fixed top-[-1rem] left-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] dark:bg-[#283064bf] z-0"></div>

			<div className="relative z-10">
				<Navbar />
				<ResponsiveNavbar />

				<Routes>
					<Route path="/" element={<Accardions />} />
					<Route path="/javascript" element={<Accardions />} />
					<Route path="/react" element={<Accardions />} />
					<Route path="/typescript" element={<Accardions />} />
					<Route path="/git-basics" element={<Accardions />} />
				</Routes>
				<Toaster position="top-right" />
			</div>
		</div>
	);
}

export default App;
