import ConnectInterface from './core/ConnectInterface.js';
import Root from './Page/root.js';

const $rootWrapper = document.getElementById('root');

function init() {
  const $root = new Root({ $element: $rootWrapper });
  const rootInterface = new ConnectInterface({ elements: { $root } });
  rootInterface.init();
}

$rootWrapper && init();
