import { reRenderHtmlElement } from './connectInterface.js';

export default function Store() {
  this.state;
  this.targeComponent = {};
}

Store.prototype.init = async function () {
  await this.requestDataToServer();
};

Store.prototype.requestDataToServer = function () {};

Store.prototype.getState = function (keys) {
  if (!keys) return this.state;
  return Object.keys(keys).reduce((acc, cur) => {
    if (this.state.hasOwnProperty(cur)) {
      return { ...acc, ...{ [cur]: this.state[cur] } };
    }
  }, {});
};

Store.prototype.setState = function (newState) {
  this.state = { ...this.state, ...newState };
  // 바뀐 state를 포함한 element만 변경
  reRenderHtmlElement({
    targetHtmlElement: this.targeComponent.element,
    newState,
  });
};
