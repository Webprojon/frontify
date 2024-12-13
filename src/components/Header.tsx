import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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

	const handleOpen = () => {
		setMenu((prev) => !prev);
	};

	return (
		<motion.header
			className="bg-[#20293adf] md:bg-transparent opacity-60 md:opacity-100 relative md:border-b border-slate-600 text-white tracking-wider"
			//animate={{ height: "12vh" }}
		>
			<div className="hidden">
				<div
					onClick={handleOpen}
					className="absolute right-3 top-3 z-10 md:hidden"
				>
					{menu ? (
						<IoClose className="size-9" />
					) : (
						<MdMenu className="size-9" />
					)}
				</div>
			</div>

			<nav
				className={`absolute md:static px-2 md:px-0 md:pt-0 flex flex-col gap-y-6 md:flex-row justify-between items-center md:h-[12vh]
        z-0 lg:max-w-[1200px] mx-auto transform transition-transform duration-500 ease-in-out
				 ${menu ? "translate-y-0" : "-translate-y-full md:translate-y-0"}`}
			>
				<Link
					to="/"
					className="font-semibold text-[22px] uppercase hidden md:block"
				>
					Frontify
				</Link>

				<div className="flex flex-wrap justify-center font-medium gap-y-4 gap-x-10 md:text-[17px] uppercase mt-2 md:mt-0">
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
	);
}
