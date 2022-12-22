import { theme } from './theme.js'
import { copy } from './copy.js'
import { calc } from './calculate.js'

export const main = document.querySelector('main')
export const root = document.querySelector(':root')
export const input = document.getElementById('input')
export const resultInput = document.getElementById('result')
export const allowedKeys = [
  '(',
  ')',
  '/',
  '*',
  '-',
  '+',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  '1',
  '0',
  '.',
  '%',
  ' '
]

calc()
copy()
theme()
