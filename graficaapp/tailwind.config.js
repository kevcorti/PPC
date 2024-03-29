/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				brown: '#350101',
				bgmain: '#f7ecdc',
			},
			borderWidth: {
				DEFAULT: '1px',
				0: '0',
				2: '2px',
				3: '3px',
				4: '4px',
				6: '6px',
				8: '8px',
				16: '16px',
			},
		},
	},
	plugins: [require('daisyui')],
};
