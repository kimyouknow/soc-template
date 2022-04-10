export default class Store {
  constructor(props) {
    this.state = props;
    this.targetComponent = {};
    this.requestDataToServer;
  }
  async init() {
    await this.requestDataToServer();
  }
  requestDataToServer() {}
  getState(keysObj) {
    if (!keysObj) return state;
    return Object.keys(keysObj).reduce((acc, cur) => {
      if (this.state.hasOwnProperty(cur)) {
        return { ...acc, ...{ [cur]: this.state[cur] } };
      }
    }, {});
  }
  setState = function (newState) {
    this.state = { ...this.state, ...newState };
    return newState;
  };
}
