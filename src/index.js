import Root from './Layout/Root.js';

function init() {
  const $rootWrapper = document.getElementById('root');
  $rootWrapper.append(Root());
}

window.addEventListener('DOMContentLoaded', init);
