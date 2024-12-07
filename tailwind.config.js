/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "480px",
			sm: "640px",
			md: "980px",
			lg: "1200px",
			xl: "1380px",
		},
		extend: {},
	},
	plugins: [],
};
