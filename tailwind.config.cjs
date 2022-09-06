/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				fade: "fadeIn .6s ease-in-out",
			},
			keyframes: (theme) => ({
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			}),
		},
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
};
