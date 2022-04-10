export default class ConnectInterface {
  constructor({ elements, store }) {
    this.elements = elements;
    this.store = store;
  }
  init() {
    this.store && this.connectStore();
    Object.values(this.elements).map((element) => element.init());
  }
  addElement({ newElements }) {
    this.elements = { ...this.elements, ...newElements };
    this.connectStore();
    Object.values(newElements).map((element) => element.init());
  }
  connectStore() {
    Object.values(this.elements).map((element) => {
      element.interface = this;
    });
  }
  getStatefromStore(keysObj) {
    return this.store.getState(keysObj);
  }
  setStateToStore({ newState }) {
    const updatedState = this.store.setState(newState);
    this.reRenderHtmlElement({
      newState: updatedState,
    });
  }
  reRenderHtmlElement({ newState }) {
    Object.values(this.elements).map((element) => {
      Object.keys(newState).map((key) => {
        if (element.state.hasOwnProperty(key)) {
          element.render();
        }
      });
    });
  }
}
