import { connectStore } from '../../core/connectInterface.js';
import HtmlElement from '../../core/HtmlElement.js';
import mainStore from './store.js';
import ClickCard from '../../components/ClickCard/index.js';
import { handleClick } from './eventHandler.js';
import { setInheritance } from '../../utils/manuplateDom.js';

export default function Main({ $element, isDirect }) {
  HtmlElement.call(this, { $element, isDirect });
}

setInheritance({ parent: HtmlElement, child: Main });

Main.prototype.initStore = function () {
  connectStore({ element: this, store: mainStore });
};

Main.prototype.setTemplate = function () {
  const {
    state: { mockArr },
  } = this.store;
  return mockArr.length === 0
    ? `<div>Loading....</div>`
    : mockArr
        .map((clickObj) => {
          const $clickcard = new ClickCard({
            $elemen: this.$element,
            isDirect: true,
            props: clickObj,
          });
          return $clickcard.setTemplate();
        })
        .join('');
};

Main.prototype.setEvent = function () {
  this.$element.addEventListener('click', handleClick.bind(this));
};
