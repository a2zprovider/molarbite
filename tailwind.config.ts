import type { Config } from 'tailwindcss'
export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#eef1f8',
        secondary:'#0052CC',
        priBg: '#F5E6FE',
        priText: '#35AF8A',
        darkBg: '#1E1E2E',
        darkBgSec: '#27293D',
        textCutBlue: '#0052cc'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      fontSize: {
        nl: ['56px', '64px']
      },
      screens: {
        '2xs': '200px',
        '1xs': '350px',
        '1xl': '1400px',
        '3xl': '2000px'
      }
    }
  },
  plugins: [],
} satisfies Config
