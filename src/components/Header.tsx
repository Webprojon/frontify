import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface Links {
	id: number;
	hash: string;
	link: string;
	url: string;
}
const LINKS: Links[] = [
	{
		id: 1,
		hash: "/",
		link: "Html",
		url: "https://skillicons.dev/icons?i=html",
	},
	{
		id: 2,
		hash: "/css",
		link: "Css",
		url: "https://skillicons.dev/icons?i=css",
	},
	{
		id: 3,
		hash: "/javascript",
		link: "Javascript",
		url: "https://skillicons.dev/icons?i=js",
	},
	{
		id: 4,
		hash: "/react",
		link: "React",
		url: "https://skillicons.dev/icons?i=react",
	},
	{
		id: 5,
		hash: "/typescript",
		link: "Typescript",
		url: "https://skillicons.dev/icons?i=ts",
	},
	{
		id: 6,
		hash: "/git-basics",
		link: "Git Basics",
		url: "https://skillicons.dev/icons?i=git",
	},
];

export default function Navbar() {
	const location = useLocation().pathname;

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<>
			{/* Desktop Navbar */}
			<motion.header
				className="border-b border-slate-600 text-white tracking-wider hidden md:block"
				initial={{ translateY: "-150%" }}
				animate={{ translateY: "1%" }}
				transition={{ duration: 0.8, delay: 0.5 }}
			>
				<nav className="flex gap-y-6 justify-between items-center h-[12vh] max-w-[1200px] mx-auto">
					<Link to="/" className="font-semibold text-[22px] uppercase">
						Frontify
					</Link>

					<div className="flex justify-center font-medium gap-y-4 gap-x-10 text-[17px] uppercase">
						{LINKS.map((link) => (
							<Link
								key={link.id}
								to={link.hash}
								className={`pb-[1px] hover:border-b border-slate-400
								${location === link.hash && "border-b"}`}
							>
								{link.link}
							</Link>
						))}
					</div>
				</nav>
			</motion.header>

			{/* Responsive Navbar */}
			<motion.header
				className="flex items-center justify-center md:hidden w-full bg-slate-800 fixed bottom-0 p-2 h-[13vh] border-t border-slate-600"
				initial={{ translateY: "150%" }}
				animate={{ translateY: "1%" }}
				transition={{ duration: 0.8, delay: 2 }}
			>
				<nav className="flex justify-between w-[99%]">
					{LINKS.map((link) => (
						<Link
							key={link.id}
							to={link.hash}
							onClick={scrollTop}
							className="flex flex-col items-center"
						>
							<img src={link.url} alt={link.hash} className="h-[42px]" />
							<span
								className={`text-[14px] text-slate-300 mt-1
								 ${location === link.hash && "border-b border-slate-600"}`}
							>
								{link.link}
							</span>
						</Link>
					))}
				</nav>
			</motion.header>
		</>
	);
}
