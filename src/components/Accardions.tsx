import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { QUESTIONS } from "../lib/data";
import Feedback from "./Feedback";
import { HiOutlinePlus } from "react-icons/hi";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

export default function Accardions() {
	const location = useLocation().pathname;
	const [isAccardion, setIsAccardion] = useState<number | null>(null);
	const [loading, setLoading] = useState(true);
	const [feedback, setFeedback] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	const toggleAccardion = (index: number) => {
		setIsAccardion(isAccardion === index ? null : index);
	};

	//if (loading) {
	//	return (
	//	);
	//}

	return (
		<div className="px-2 md:px-0 md:max-w-[1200px] mx-auto text-white tracking-wide h-[89vh] overflow-y-scroll noscroll z-0">
			{loading && (
				<div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[30px] font-medium">
					Loading...
				</div>
			)}

			{!loading &&
				QUESTIONS.filter((q) => q.category === location).map((question) => (
					<div
						key={question.id}
						className="border-b border-slate-600 my-6 pb-1 md:pb-2"
					>
						<div
							onClick={() => toggleAccardion(question.id)}
							className="flex items-start justify-between py-2 cursor-pointer"
						>
							<h2 className="text-[17px] md:text-[22px] md:leading-none">
								{question.question}
							</h2>

							<motion.div
								animate={{
									rotate: isAccardion === question.id ? 45 : 0,
								}}
								transition={{ duration: 0.3 }}
							>
								<HiOutlinePlus className="text-slate-300 size-5 md:size-7 ml-[2px]" />
							</motion.div>
						</div>

						<AnimatePresence>
							{isAccardion === question.id && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: "auto", opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}
									className="md:text-[17px] text-slate-300 tracking-wider"
								>
									{question.answer}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}

			{feedback ? (
				<Feedback />
			) : (
				<div className=" tracking-widest flex flex-col justify-center items-center gap-2 mb-4 mt-10">
					<h3 className="text-[28px]">Help improve Frontify</h3>
					<p className="text-[18px] font-light">Was this helpful to you ?</p>
					<div
						onClick={() => setFeedback((prev) => !prev)}
						className="flex gap-x-4 cursor-pointer mt-2"
					>
						<button className="flex items-center gap-2 border border-slate-600 px-3 py-1 rounded-sm hover:bg-slate-800">
							<AiOutlineLike className="size-5" /> Yes
						</button>
						<button className="flex items-center gap-2 border border-slate-600 px-3 py-1 rounded-sm hover:bg-slate-800">
							<AiOutlineDislike className="size-5" /> No
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
