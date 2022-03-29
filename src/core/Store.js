import { reRenderHtmlElement } from './connectInterface.js';

export default function Store(props) {
  let state = props;
  this.targeComponent = {};
  this.requestDataToServer;
  this.getState = function (keys) {
    if (!keys) return state;
    return Object.keys(keys).reduce((acc, cur) => {
      if (state.hasOwnProperty(cur)) {
        return { ...acc, ...{ [cur]: state[cur] } };
      }
    }, {});
  };

  this.setState = function (newState) {
    state = { ...state, ...newState };
    // 바뀐 state를 포함한 element만 변경
    reRenderHtmlElement({
      targetHtmlElement: this.targeComponent.element,
      newState,
    });
  };
}

Store.prototype.init = async function () {
  await this.requestDataToServer();
};

Store.prototype.requestDataToServer = function () {};
