import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

interface Links {
	id: number;
	hash: string;
	link: string;
}

export default function Header() {
	const location = useLocation().pathname;
	const [menu, setMenu] = useState(false);

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
		<header className="bg-[#20293adf] opacity-60 h-[10vh] relative md:border-b border-slate-600 text-white tracking-wider">
			<div>
				<div
					onClick={() => setMenu(!menu)}
					className="absolute right-4 top-3 z-10 md:hidden"
				>
					{menu ? (
						<IoClose className="size-9" />
					) : (
						<MdMenu className="size-9" />
					)}
				</div>
			</div>

			<nav
				className={`absolute md:static pt-5 px-2 md:pt-0 flex flex-col gap-y-6 md:flex-row justify-between items-center md:h-[12vh]
					z-0 lg:max-w-[1200px] mx-auto transition-transform duration-500
					 ${menu ? "translate-y-0" : "-translate-y-full md:translate-y-0"} md:flex`}
			>
				<Link to="/" className="font-semibold text-[20px] uppercase">
					Frontify
				</Link>

				<div className="flex flex-wrap justify-center font-medium gap-y-2 gap-x-10 md:text-[17px] uppercase">
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
