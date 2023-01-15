/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx,ts,js,jsx}"],
	theme: {
		extend: {
			colors: {
				// Primary

				Light_Cyan: "hsl(193, 38%, 86%)",
				Neon_Green: "hsl(150, 100%, 66%)",

				// Neutral

				Grayish_Blue: "hsl(217, 19%, 38%)",
				Dark_Grayish_Blue: "hsl(217, 19%, 24%)",
				Dark_Blue: "hsl(218, 23%, 16%)",
			},
			fontFamily: {
        sans: ['Manrope', 'sans-serif']
      },
		},
	},
	plugins: [],
};
