/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
            zIndex: {
                'max': '9999',
            }
        }
	},
	plugins: []
};
