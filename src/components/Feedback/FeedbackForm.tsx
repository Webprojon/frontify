import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import axios from "axios";
import { useState } from "react";

export default function FeedbackForm() {
	const [username, setUsername] = useState("");
	const [text, setText] = useState("");

	//Send to telegram
	const sendTelegramMessage = async (messageContent: string) => {
		const token = "6948864577:AAHTh7RO9xCZ6WFKQCle7YqvOnbfcXZIaP4";
		const chat_id = "5850460435";
		const url = `https://api.telegram.org/bot${token}/sendMessage`;

		try {
			await axios.post(url, {
				chat_id: chat_id,
				text: messageContent,
			});
		} catch (error) {
			console.error(error);
			throw new Error("Failed to send Telegram message");
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const messageContent = `User: ${username} \nFeedback: ${text}`;

		try {
			await sendTelegramMessage(messageContent);

			// Send to firebase
			await addDoc(collection(db, "feedbacks"), {
				username,
				text,
			});
		} catch (error) {
			console.error(error);
			toast.error("Failed to send feedback. Please try again.");
		} finally {
			setText("");
			setUsername("");
			toast.success("Feedback sent successfully!");
		}
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
					value={username}
					autoComplete="off"
					placeholder="Username"
					onChange={(e) => setUsername(e.target.value)}
					className="border border-slate-600 bg-transparent outline-none p-3 rounded-md text-slate-300 placeholder:text-slate-300"
				/>
				<textarea
					required
					name="text"
					value={text}
					autoComplete="off"
					placeholder="Type your feedback here..."
					onChange={(e) => setText(e.target.value)}
					className="resize-none border border-slate-600 bg-transparent outline-none p-3 rounded-md h-[20vh] text-slate-300 placeholder:text-slate-300"
				/>
				<button className="border border-slate-600 rounded-md p-3 hover:bg-slate-800 transition-all">
					Send Us
				</button>
			</form>
		</div>
	);
}
