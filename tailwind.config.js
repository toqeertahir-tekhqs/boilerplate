/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			defaultFontFamily: ["myFirstFont"],
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
};
