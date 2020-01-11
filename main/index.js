import alert from './utils.js';

import fib from '@my-lib/fib';
// import sum from '@my-lib/sum';

function main() {
  const appElem = document.getElementById('app');
  appElem.innerHTML = '<h1>Monorepo go!</h1>';
  alert('It works! ' + fib(10));
}

window.onload = main;