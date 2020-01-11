import alert from './utils.js';

function main() {
  const appElem = document.getElementById('app');
  appElem.innerHTML = '<h1>Monorepo go!</h1>';
  alert('It works!')
}

window.onload = main;