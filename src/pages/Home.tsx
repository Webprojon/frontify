import Typewriter from "typewriter-effect";

export default function Home() {
	return (
		<div className="md:max-w-[1200px] h-[75vh] mx-auto text-white flex flex-col gap-y-10 justify-center items-center tracking-wider">
			<h2 className="text-[36px] md:text-[64px] font-semibold leading-none">
				<Typewriter
					options={{
						autoStart: true,
						loop: true,
						delay: 50,
						strings: [`Welcome to Frontify!`],
						cursor: "",
					}}
				/>
			</h2>
			<div className="text-center space-y-6 max-w-[1000px]">
				<p className="text-[22px]">We're delighted to have you here.</p>
				<p className="leading-10 text-[18px] md:text-[20px]">
					At Frontify, you'll have the opportunity to enhance your frontend
					skills and deepen your understanding of frontend theories.
				</p>
			</div>
		</div>
	);
}
