// Have to use module.exports format, the npx generated one, will remove single quote from 'gallery' and make it not working.
// Check git history.
// Original syntax:
//    const config: Config = {content: [], ...}
//    export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        gallery: 'repeat(auto-fit, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
};
