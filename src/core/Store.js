import { reRenderHtmlElement } from './connectInterface.js';

export function Store(state) {
  this.state = state;
  this.targeComponent = {};
}

Store.prototype.init = async function () {
  await this.requestDataToServer();
};

Store.prototype.requestDataToServer = function () {};

Store.prototype.getState = function (keys) {
  if (!keys) return this.state;
  // this.state에 있는 요소 중 key에 해당하는 요소들
  // return {...요청한 state들};
  return this.state;
};
Store.prototype.setState = function (newState) {
  // 디버그용
  console.log(newState);
  this.state = { ...this.state, ...newState };
  // 바뀐 state를 포함한 element만 변경
  reRenderHtmlElement({
    targetHtmlElement: this.targeComponent.element,
    newState,
  });
};
