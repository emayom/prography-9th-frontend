/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  future: {
    // 모바일에선 hover 스타일이 동작하지 않도록
    hoverOnlyWhenSupported: true,
  },
};
