/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import scrollbarHide from 'tailwind-scrollbar-hide';

module.exports = {
	content: [],
	theme: {
		extend: {},
	},
	plugins: [scrollbarHide, typography],
};
