import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useGlobalStates } from "../../context/globalStates.";

export default function FeedbackInfo() {
	const { setToggleFeedback } = useGlobalStates((state) => state);

	return (
		<div className="tracking-widest flex flex-col justify-center items-center gap-2 mb-4 mt-10">
			<h3 className="text-[28px]">Help improve Frontify</h3>
			<p className="text-[18px] font-light">Was this helpful ?</p>
			<div
				onClick={setToggleFeedback}
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
	);
}
