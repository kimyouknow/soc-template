export default class HtmlElement {
  constructor({ $element }) {
    this.$element = $element;
  }
  init() {
    this.render();
    this.renderChild();
    this.setEvent();
  }
  conenctStore() {}
  setTemplate() {
    return ``;
  }
  renderChild() {}
  beforeRender() {
    this.state = {};
  }
  render() {
    this.beforeRender();
    this.$element.innerHTML = this.setTemplate();
  }
  setEvent() {}
}
