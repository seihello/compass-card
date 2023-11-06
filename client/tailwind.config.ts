import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sg: ['"Space Grotesk"', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          main: '#009DDC',
          light: '#EDFAFF',
          active: '#008EC7'
        },
        sky: {
          dark: '#DDF3FB',
          main: '#FAFDFE',
          active: '#DDF4FF'
        },
        yellow: {
          main: '#F9C200',
          light: '#F9C20033'
        },
        pink: {
          main: '#EB2A8C',
          light: '#ED2B7133',
        },
        green: {
          main: '#66CF14',
          light: '#66CF1433'
        },
        gray: {
          0: '#333333',
          1: '#6E6E7A',
          2: '#E6E6E6',
          3: '#F5F5F5'
        }
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
