import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

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
        },
        screens: {
            'xs': '400px',
        }
    }
},

  plugins: [typography]
} satisfies Config;
