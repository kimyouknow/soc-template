import HtmlElement from '../../core/HtmlElement.js';
import { handleClick } from './eventHandler.js';

export default class Main extends HtmlElement {
  constructor({ $element }) {
    super({ $element });
  }
  beforeRender() {
    this.state = {
      ...this.interface.getStatefromStore({
        mockArr: null,
      }),
    };
  }
  setTemplate() {
    const { mockArr } = this.state;
    return mockArr.length === 0
      ? `<div>Loading....</div>`
      : mockArr
          .map(({ key, value }) => {
            return `<div class="${key} box" data-click-type="${key}">
            <h1>몇 번 클릭했니</h1>
            <h2>${value}</h2>
          </div>`;
          })
          .join('');
  }
  setEvent() {
    this.$element.addEventListener('click', handleClick.bind(this));
  }
}
