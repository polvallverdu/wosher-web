/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "twitter": "#1da1f2",
        "youtube": "#ff0000",
        "twitch": "#6441a5",
      }
    },
  },
  plugins: [],
}
