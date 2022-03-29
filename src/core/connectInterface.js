export function connectStore({ element, store }) {
  element.store = store;
  store.targeComponent = { ...store.targeComponent, element };
}

export function reRenderHtmlElement({ targetHtmlElement, newState }) {
  if (targetHtmlElement) {
    Object.keys(newState).map((key) => {
      if (targetHtmlElement.store.getState().hasOwnProperty(key)) {
        targetHtmlElement.render();
      }
    });
  }
}

// // 함수가 호출됐는지 어떻게 구독하고 있지?
// function ConnectInterface({ element, store }) {
//   this.element = element;
//   this.store = store;
//   this.connectStore();
// }

// ConnectInterface.prototype.connectStore = function () {
//   this.element.store = this.store;
//   this.store.targeComponent = {
//     ...this.store.targeComponent,
//     element: this.element,
//   };
// };

// ConnectInterface.prototype.reRenderHtmlElement = function ({
//   targetHtmlElement,
//   newState,
// }) {
//   if (targetHtmlElement) {
//     Object.keys(newState).map((key) => {
//       if (targetHtmlElement.store.state.hasOwnProperty(key)) {
//         targetHtmlElement.render();
//       }
//     });
//   }
// };
