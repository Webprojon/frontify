import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import { QUESTIONS } from "../lib/data";

export default function Accardions() {
	const location = useLocation().pathname;
	const [isAccardion, setIsAccardion] = useState<number | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	const toggleAccardion = (index: number) => {
		setIsAccardion(isAccardion === index ? null : index);
	};

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
							className="flex justify-between py-2 cursor-pointer"
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
								<HiPlus className="size-6 md:size-7 ml-[2px]" />
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
		</div>
	);
}
