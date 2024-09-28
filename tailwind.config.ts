
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/typography'),
  ],
};
