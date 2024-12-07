import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus } from "react-icons/hi2";

export default function Accardions() {
	const [isAccardion, setIsAccardion] = useState<number | null>(null);

	const questions = [
		{
			id: 1,
			question: "What is HTML?",
			answer:
				"HTML stands for HyperText Markup Language and is used to structure content on web pages.",
		},
		{
			id: 2,
			question: "What are semantic elements in HTML?",
			answer:
				"Semantic tags like `<header>`, `<footer>`, `<article>`, `<section>`, and `<nav>` improve SEO and accessibility.",
		},
		{
			id: 3,
			question: "What is the difference between `<div>` and `<span>`?",
			answer:
				"`<div>` is a block-level element, while `<span>` is an inline element.",
		},
		{
			id: 4,
			question: "What is the `<meta>` tag used for?",
			answer:
				"The `<meta>` tag defines metadata such as charset, viewport, and descriptions.",
		},
		{
			id: 5,
			question: "What is the purpose of the `<iframe>` tag?",
			answer:
				"The `<iframe>` tag is used to embed third-party web content into a web page.",
		},
		{
			id: 6,
			question: "How do you include JavaScript in an HTML document?",
			answer:
				"Using the `<script>` tag. Example: `<script src='script.js'></script>`.",
		},
		{
			id: 7,
			question:
				"What is the difference between `absolute` and `relative` URLs?",
			answer:
				"An absolute URL contains the full path, while a relative URL depends on the current document's location.",
		},
		{
			id: 8,
			question: "What are ARIA roles, and why are they important?",
			answer:
				"ARIA roles improve accessibility by defining roles for assistive technologies.",
		},
		{
			id: 9,
			question: "How can you prevent default behavior for an event?",
			answer: "Using `event.preventDefault()` in your event listener function.",
		},
		{
			id: 10,
			question: "What is the difference between `<ul>` and `<ol>`?",
			answer:
				"`<ul>` creates unordered lists, while `<ol>` creates ordered lists.",
		},
		{
			id: 11,
			question: "How can you create a responsive web page?",
			answer: "Using the `<meta>` viewport tag and CSS media queries.",
		},
		{
			id: 12,
			question: "What is the purpose of the `action` attribute in forms?",
			answer:
				"The `action` attribute defines the server endpoint to send form data to.",
		},
		{
			id: 13,
			question: "How can you use input validation in HTML?",
			answer:
				"Using HTML5 form attributes like `required`, `pattern`, and `type='email'`.",
		},
		{
			id: 14,
			question: "What is a placeholder in form input?",
			answer:
				"The `placeholder` attribute displays a hint or description in the input field until text is entered.",
		},
		{
			id: 15,
			question:
				"What is the difference between `<button>` and `<input type='button'>`?",
			answer:
				"Both create clickable buttons, but `<button>` can include HTML content, while `<input type='button'>` cannot.",
		},
		{
			id: 16,
			question: "How does `target='_blank'` work in anchor tags?",
			answer: "It opens the link in a new tab or window.",
		},
		{
			id: 17,
			question: "How can you use the `<link>` tag?",
			answer: "The `<link>` tag links external stylesheets to HTML documents.",
		},
		{
			id: 18,
			question: "What are forms, and what are common form input types?",
			answer:
				"Forms are used for user input. Common types include `<input>`, `<textarea>`, `<select>`, and `<button>`.",
		},
		{
			id: 19,
			question: "How do you use custom attributes with HTML?",
			answer:
				"Custom attributes use the `data-*` syntax. Example: `<div data-id='123'></div>`.",
		},
		{
			id: 20,
			question:
				"What is the difference between `rel='stylesheet'` and `rel='icon'`?",
			answer:
				"`rel='stylesheet'` links a CSS file, while `rel='icon'` sets the favicon of the page.",
		},
		{
			id: 21,
			question: "What is CSS?",
			answer:
				"CSS stands for Cascading Style Sheets and is used to style HTML content.",
		},
		{
			id: 22,
			question: "What is the difference between `padding` and `margin`?",
			answer:
				"Padding is the space inside an element, while margin is the space outside the element.",
		},
		{
			id: 23,
			question:
				"How do you center an element horizontally and vertically with CSS?",
			answer:
				"Using `flexbox`: `display: flex; justify-content: center; align-items: center;`.",
		},
		{
			id: 24,
			question:
				"What is the difference between `relative`, `absolute`, and `fixed` positioning?",
			answer:
				"`relative`: positions an element relative to itself, `absolute`: relative to the nearest positioned ancestor, `fixed`: relative to the browser window.",
		},
		{
			id: 25,
			question: "What are CSS pseudo-classes?",
			answer:
				"Pseudo-classes define a specific state for an element, e.g., `:hover`, `:nth-child()`, or `:focus`.",
		},
		{
			id: 26,
			question: "What is the CSS `z-index` property used for?",
			answer:
				"The `z-index` determines the stacking order of overlapping elements.",
		},
		{
			id: 27,
			question: "How does `position: sticky;` behave in CSS?",
			answer:
				"It allows an element to act as `relative` until a certain scroll position, then acts as `fixed`.",
		},
		{
			id: 28,
			question: "What are CSS keyframe animations?",
			answer:
				"CSS animations use `@keyframes` to define animation states over time and apply them with the `animation` property.",
		},
		{
			id: 29,
			question:
				"What is the difference between `inline`, `block`, and `inline-block` elements?",
			answer:
				"`inline` stays on the same line, `block` spans the full width, `inline-block` allows box properties while remaining inline.",
		},
		{
			id: 30,
			question: "How can you create a responsive layout with media queries?",
			answer:
				"Using `@media` to apply styles based on viewport size, e.g., `@media (max-width: 768px) { ... }`.",
		},
		{
			id: 31,
			question: "What is the purpose of `object-fit` in CSS?",
			answer:
				"`object-fit` controls how an image fits into its container, e.g., `cover`, `contain`, `fill`.",
		},
		{
			id: 32,
			question: "What are transitions in CSS?",
			answer:
				"Transitions enable smooth changes between CSS properties over time using `transition: all 0.3s ease;`.",
		},
		{
			id: 33,
			question: "What is `flexbox` in CSS?",
			answer:
				"Flexbox is a layout model for distributing space and aligning items. Example: `display: flex;`.",
		},
		{
			id: 34,
			question: "What is the difference between `grid` and `flexbox`?",
			answer:
				"Grid is for 2D layouts (both rows and columns), while flexbox is for 1D (row or column) layouts.",
		},
		{
			id: 35,
			question: "How can you use `calc()` in CSS?",
			answer:
				"The `calc()` function dynamically calculates property values. Example: `width: calc(100% - 50px);`.",
		},
		{
			id: 36,
			question: "What is `opacity` in CSS?",
			answer:
				"The `opacity` property controls the transparency of an element. Values range from `0` (completely transparent) to `1` (completely opaque).",
		},
		{
			id: 37,
			question: "What are CSS pseudo-elements?",
			answer:
				"Pseudo-elements like `::before` and `::after` let you style parts of elements without adding extra HTML.",
		},
		{
			id: 38,
			question: "How can you optimize CSS performance?",
			answer:
				"By minimizing CSS rules, combining selectors, and removing unused styles.",
		},
		{
			id: 39,
			question:
				"What is the difference between `min-width`, `max-width`, and `width`?",
			answer:
				"`min-width` sets the minimum width, `max-width` sets the maximum allowed width, and `width` sets a fixed width.",
		},
		{
			id: 40,
			question: "How do you implement CSS animations with `keyframes`?",
			answer:
				"Define a keyframe with `@keyframes` and use the `animation` property to apply it. Example: `@keyframes move { ... } animation: move 2s infinite;`.",
		},
	];

	const toggleAccardion = (index: number) => {
		setIsAccardion(isAccardion === index ? null : index);
	};

	return (
		<div className="px-2 md:px-0 md:max-w-[1200px] mx-auto text-white tracking-wide h-screen overflow-y-scroll noscroll">
			{questions.map((question) => (
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
