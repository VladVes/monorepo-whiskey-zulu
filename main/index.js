import alert from './utils.js';

import fib from '@zulu-whiskey/lib/fib';
import sum from '@zulu-whiskey/lib/sum';

function main() {
  const appElem = document.getElementById('app');
  appElem.innerHTML = '<h1>Monorepo go!</h1>';
  alert('It works! ' + fib(10) + sum(3, 4));
}

window.onload = main;
