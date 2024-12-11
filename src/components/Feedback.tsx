export default function Feedback() {
	return (
		<div className="hidden">
			<h2>Give some feedback</h2>
			<form>
				<input type="text" placeholder="Your name" />
				<input type="text" placeholder="Your feedback" />
				<button>Send Us</button>
			</form>
		</div>
	);
}
