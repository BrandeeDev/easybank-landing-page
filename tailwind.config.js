/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        public:['Public Sans', 'sans-serif'],
      },
      backgroundImage:{
        mobile_menu_gradient:"linear-gradient(180deg, #2D314D 0%, rgba(45, 49, 77, 0.0001) 100%);",
        presentation_btn_gradient:"linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%);",
        footer_btn:"linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%);",
        menu_b_gradient:"linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%);",
        bg_presentation:"url('./images/bg-intro-mobile.svg')",
        bg_presentation_desktop:"url('./images/bg-intro-desktop.svg')",

      },
    },
  },
  plugins: [],
}
