/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
            colors: {
                neutral: {
                    925: '#101010'
                }
            }
        }
	},
	plugins: []
};
