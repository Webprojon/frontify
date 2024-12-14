import { Link, useLocation } from "react-router-dom";

interface Links {
	id: number;
	hash: string;
	link: string;
}
// Desktop Navbar
const LINKS: Links[] = [
	{
		id: 1,
		hash: "/",
		link: "Html & Css",
	},
	{
		id: 2,
		hash: "/javascript",
		link: "Javascript",
	},
	{
		id: 3,
		hash: "/react",
		link: "React",
	},
	{
		id: 4,
		hash: "/typescript",
		link: "Typescript",
	},
	{
		id: 5,
		hash: "/git-basics",
		link: "Git Basics",
	},
];

export default function Navbar() {
	const location = useLocation().pathname;

	return (
		<header className="border-b border-slate-600 text-white tracking-wider hidden md:block">
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
		</header>
	);
}

// Responsive Navbar
const RESPONSIVELINKS = [
	{
		id: 1,
		hash: "/",
		url: "https://skillicons.dev/icons?i=html",
	},
	{
		id: 2,
		hash: "/",
		url: "https://skillicons.dev/icons?i=css",
	},
	{
		id: 3,
		hash: "/javascript",
		url: "https://skillicons.dev/icons?i=js",
	},
	{
		id: 4,
		hash: "/react",
		url: "https://skillicons.dev/icons?i=react",
	},
	{
		id: 5,
		hash: "/typescript",
		url: "https://skillicons.dev/icons?i=ts",
	},
	{
		id: 6,
		hash: "/git-basics",
		url: "https://skillicons.dev/icons?i=git",
	},
];

export function ResponsiveNavbar() {
	const scrollTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<header className="flex items-center justify-center md:hidden w-full bg-slate-800 fixed bottom-0 px-2 py-3 border-t border-slate-600">
			<nav className="flex justify-between w-[99%]">
				{RESPONSIVELINKS.map((link) => (
					<Link to={link.hash} onClick={scrollTop}>
						<img
							key={link.id}
							src={link.url}
							alt={link.hash}
							className="h-[40px]"
						/>
					</Link>
				))}
			</nav>
		</header>
	);
}
