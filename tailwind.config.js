/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js, jsx}"],
	theme: {
		colors: {
			primaryGreen: "#94B49F",
			secondaryGreen: "#CEE5D0",
			primaryYellow: "#FCF8E8",
			primaryOrange: "#ECB390",
			lightGrey: "#D3D3D3",
		},
		extend: {
			backgroundImage: {
				hero: "url('/src/bg.jpeg')",
			},
		},
	},
	plugins: [],
};
