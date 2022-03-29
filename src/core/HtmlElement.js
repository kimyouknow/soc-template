export default function HtmlElement({ $element, isDirect }) {
  this.$element = $element;
  this.store;
  this.privateState;
}

HtmlElement.prototype.init = function () {
  this.initStore();
  this.render();
  this.setEvent();
};

HtmlElement.prototype.initStore = function () {};

HtmlElement.prototype.setTemplate = function () {
  return ``;
};

HtmlElement.prototype.renderChild = function () {};

HtmlElement.prototype.render = function () {
  this.$element.innerHTML = this.setTemplate();
  this.renderChild();
};

HtmlElement.prototype.setEvent = function () {};
