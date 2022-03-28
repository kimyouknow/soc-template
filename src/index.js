import Root from './Page/root.js';

const $rootWrapper = document.getElementById('root');

function init() {
  const $root = new Root($rootWrapper);
  $root.init();
}

$rootWrapper && init();
