export default class HtmlElement {
  constructor({ type = 'div' }) {
    this.$element = document.createElement(type);
  }
  init() {
    this.renderChild();
    this.setEvent();
  }
  setTemplate() {}
  beforeRender() {
    this.state = {};
  }
  render() {
    return this.$element;
  }
  setEvent() {}
}
