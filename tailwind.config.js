/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'blue-pr': '#EEF5F9',
        'blue-sec': '#D7EEFF',
        'blue-ter': '#619CFB',
        'red-pr': '#FF4F4F',
        'bg-main': '#464646',
      }
    }
  },
  plugins: []
};