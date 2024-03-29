module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				lato: ["Lato", "sans-serif"],
			},
			maxWidth: {
				241: "241px",
				150: "150px",
				221: "221px",
				200: "200px",
			},
			height: {
				510: "510px",
			},
			width: {
				225: "225px",
			},
		},
	},
	plugins: [],
};
