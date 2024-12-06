import { Link, useLocation } from "react-router-dom";

interface Links {
	id: number;
	hash: string;
	link: string;
}

export default function Header() {
	const location = useLocation().pathname;

	const LINKS: Links[] = [
		{
			id: 1,
			hash: "/html-css",
			link: "Html & Css",
		},
		{
			id: 2,
			hash: "/javascript",
			link: "Javascript",
		},
		{
			id: 3,
			hash: "/typescript",
			link: "Typescript",
		},
		{
			id: 4,
			hash: "/react",
			link: "React",
		},
		{
			id: 5,
			hash: "/git-basics",
			link: "Git Basics",
		},
	];

	return (
		<header className="border-b border-slate-500">
			<nav className="flex justify-between items-center h-[12vh] tracking-wider max-w-[1350px] mx-auto text-white">
				<Link to="/" className="font-semibold text-[20px] uppercase">
					Frontify
				</Link>

				<div className="flex font-medium gap-6 text-[17px] uppercase">
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

				<div className="cursor-pointer">
					<span className="py-[4px] px-2 bg-slate-700">EN</span>
					<span className="py-[4px] px-2 border-r border-l border-slate-400">
						RU
					</span>
					<span className="py-[4px] px-2">UZ</span>
				</div>
			</nav>
		</header>
	);
}
