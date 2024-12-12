import toast from "react-hot-toast";

export default function Feedback() {
	//const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	//	e.preventDefault();
	//	const formdata = new FormData(e.currentTarget);
	//	const username = formdata.get("username");
	//	const text = formdata.get("text");

	//	console.log(username, text);

	//	toast.success("Feedback sent successfully!");
	//};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formdata = new FormData(e.currentTarget);
		const { username, text } = Object.fromEntries(formdata.entries()) as {
			username: string;
			text: string;
		};

		console.log(username, text);

		toast.success("Feedback sent successfully!");
	};

	return (
		<div className="max-w-[1200px] flex flex-col justify-center items-center mt-8 mb-2 md:mb-4">
			<h2 className="text-[22px] leading-none font-semibold mb-4">
				Give Us Feedback
			</h2>

			<form
				onSubmit={handleSubmit}
				className="w-full md:w-[60%] flex flex-col gap-y-4"
			>
				<input
					required
					type="text"
					name="username"
					autoComplete="off"
					placeholder="Username"
					className="border border-slate-600 bg-transparent outline-none p-3 rounded-md text-slate-300 placeholder:text-slate-300"
				/>
				<textarea
					required
					name="text"
					autoComplete="off"
					placeholder="Type your feedback here..."
					className="resize-none border border-slate-600 bg-transparent outline-none p-3 rounded-md h-[20vh] text-slate-300 placeholder:text-slate-300"
				/>
				<button className="border border-slate-600 rounded-md p-3 hover:bg-slate-800 transition-all">
					Send Us
				</button>
			</form>
		</div>
	);
}
