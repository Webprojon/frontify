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
		<header className="relative md:border-b border-slate-500 text-white">
			<div
				onClick={() => setMenu(!menu)}
				className="absolute right-3 top-2 z-10 md:hidden"
			>
				{menu ? (
					<IoClose className="size-9 " />
				) : (
					<MdMenu className=" size-9" />
				)}
			</div>

			<nav
				className={`absolute md:static pt-[10px] px-[2px] md:pt-0 flex flex-col gap-y-6 md:flex-row justify-between items-center md:h-[12vh]
					z-0 tracking-wider lg:max-w-[1350px] mx-auto transition-transform duration-500
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

				<div className="cursor-pointer my-4">
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
