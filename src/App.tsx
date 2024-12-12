import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Accardions from "./components/Accardions";
import Soon from "./components/Soon";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<div className="bg-slate-800 h-screen overflow-hidden select-none">
			<div className="fixed top-[10rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] bg-[#4d2d2d] z-0"></div>
			<div className="fixed top-[-1rem] left-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] dark:bg-[#283064bf] z-0"></div>

			<div className="relative z-10">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/html-css" element={<Accardions />} />
					<Route path="/javascript" element={<Accardions />} />
					<Route path="/react" element={<Soon />} />
					<Route path="/typescript" element={<Soon />} />
					<Route path="/git-basics" element={<Soon />} />
				</Routes>
				<Toaster position="top-right" />
			</div>
		</div>
	);
}

export default App;
