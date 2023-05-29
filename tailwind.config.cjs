/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')
const colors = require('tailwindcss/colors')

module.exports = withMT({
  // prefix: 'tw-',
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: colors.violet,
        slate: colors.slate,
        secondary: {
          50: '#f7f7f7',
          100: '#eeefef',
          200: '#d6d6d7',
          300: '#bdbebf',
          400: '#8b8d8f',
          500: '#595c5f',
          600: '#505356',
          700: '#434547',
          800: '#353739',
          900: '#2c2d2f',
          DEFAULT: '#595c5f',
        },
        primary: {
          50: '#f3f8ff',
          100: '#e7f1ff',
          200: '#c3dbff',
          300: '#9ec5fe',
          400: '#569afe',
          500: '#0d6efd',
          600: '#0c63e4',
          700: '#0a53be',
          800: '#084298',
          900: '#06367c',
          DEFAULT: '#0d6efd',
        },
        info: {
          50: '#f3fcfe',
          100: '#e7fafe',
          200: '#c3f2fb',
          300: '#9eeaf9',
          400: '#56daf5',
          500: '#0dcaf0',
          600: '#0cb6d8',
          700: '#0a98b4',
          800: '#087990',
          900: '#066376',
          DEFAULT: '#0dcaf0',
        },
        success: {
          50: '#f4f9f6',
          100: '#e8f3ee',
          200: '#c6e1d4',
          300: '#a3cfbb',
          400: '#5eab87',
          500: '#198754',
          600: '#177a4c',
          700: '#13653f',
          800: '#0f5132',
          900: '#0c4229',
          DEFAULT: '#198754',
        },
        danger: {
          50: '#fdf5f6',
          100: '#fcebec',
          200: '#f6cdd1',
          300: '#f1aeb5',
          400: '#e7727d',
          500: '#dc3545',
          600: '#c6303e',
          700: '#a52834',
          800: '#842029',
          900: '#6c1a22',
          DEFAULT: '#dc3545',
        },
        warning: {
          50: '#fffcf3',
          100: '#fff9e6',
          200: '#fff0c1',
          300: '#ffe69c',
          400: '#ffd451',
          500: '#ffc107',
          600: '#e6ae06',
          700: '#bf9105',
          800: '#997404',
          900: '#7d5f03',
          DEFAULT: '#ffc107',
        },
        light: {
          100: '#f9f9f9',
          200: '#f2f3f3',
          300: '#ececed',
          400: '#e5e6e7',
          500: '#dfe0e1',
          600: '#b2b3b4',
          700: '#868687',
          800: '#595a5a',
          900: '#2d2d2d',
          DEFAULT: '#dfe0e1',
        },

        dark: {
          50: '#f4f4f4',
          100: '#e9e9ea',
          200: '#c8c9ca',
          300: '#a6a8a9',
          400: '#646669',
          500: '#212529',
          600: '#1e2125',
          700: '#191c1f',
          800: '#141619',
          900: '#101214',
          DEFAULT: '#212529',
        },
      },
    },
    // backgroundColor: (theme) => ({
    //   ...theme('colors'),
    //   primary: '#3490dc',
    //   secondary: '#ffed4a',
    //   danger: '#e3342f',
    // }),
  },
  plugins: [require('daisyui'), require('@headlessui/tailwindcss')],
  darkMode: 'class',
})
