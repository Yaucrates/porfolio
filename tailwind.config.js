/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
            colors: {
                neutral: {
                    850: 'rgb(30,30,30)',
                }
            },
            zIndex: {
                'max': '9999',
            }
        }
	},
	plugins: [require('@tailwindcss/typography')]
};
