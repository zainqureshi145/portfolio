// /** @type {import('tailwindcss').Config} */
// const withAnimations = require('animated-tailwindcss');
// module.exports = {
// 	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
// 	darkMode: "class",
// 	theme: {
// 		// screens: {
// 		// 	sm: '480px',
// 		// 	md: '768px',
// 		// 	lg: '976px',
// 		// 	xl: '1440px'
// 		// },
// 		screens: {
// 			sm: '640px',
// 			md: '768px',
// 			lg: '1024px',
// 			xl: '1440px',
// 		},
// 		extend: {
// 		},
// 	},
// 	plugins: [],
// }



/** @type {import('tailwindcss').Config} */
const withAnimations = require('animated-tailwindcss');
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = withAnimations(
	{
		content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
		darkMode: "class",
		theme: {
			// screens: {
			// 	sm: '480px',
			// 	md: '768px',
			// 	lg: '976px',
			// 	xl: '1440px'
			// },
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1440px',
			},
			extend: {
				transitionProperty: {
					'width': 'width',
					'height': 'height'
				},
				fontFamily: {
					'sans': ['Roboto', 'sans-serif']
				}
			},
		},
		plugins: [],
	}
)