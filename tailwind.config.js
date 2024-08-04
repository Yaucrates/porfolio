/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
        screens: {
            'base': '810px'
        },
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
