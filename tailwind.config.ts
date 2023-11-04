import type { Config } from 'tailwindcss'

const config: Config = {
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
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          main: '#009DDC',
          light: '#EDFAFF'
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
        }
      },
    },
  },
  plugins: [],
}
export default config
