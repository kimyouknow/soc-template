import ConnectInterface from '../core/ConnectInterface.js';
import HtmlElement from '../core/HtmlElement.js';
import Main from './Main/index.js';
import mainStore from './Main/store.js';

export default class Root extends HtmlElement {
  constructor({ $element }) {
    super({ $element });
  }
  setTemplate() {
    return `
    <header id="header"></header>
    <main id="main"></main>
  `;
  }
  renderChild() {
    const $mainWrapper = document.getElementById('main');
    const $main = new Main({ $element: $mainWrapper, isDirect: false });
    const mainInterface = new ConnectInterface({
      elements: { $main },
      store: mainStore,
    });
    mainInterface.init();
  }
}
