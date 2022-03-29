export function connectStore({ element, store }) {
  element.store = store;
  store.targeComponent = { ...store.targeComponent, element };
}

export function reRenderHtmlElement({ targetHtmlElement, newState }) {
  if (targetHtmlElement) {
    Object.keys(newState).map((key) => {
      if (targetHtmlElement.store.state.hasOwnProperty(key)) {
        targetHtmlElement.render();
      }
    });
  }
}

// function ConnectInterface({ element, store }) {
//   this.element = element;
//   this.store = store;
//   this.connectStore()
// }

// ConnectInterface.prototype.connectStore = function(){
//   this.element.store = store;

// }
