import ClickCard from '../../components/ClickCard/index.js';
import HtmlElement from '../../core/HtmlElement.js';
import { handleClick } from './eventHandler.js';
import { setInheritance } from '../../utils/manuplateDom.js';
import mainStore from './store.js';

export default function Main({ $element, isDirect }) {
  HtmlElement.call(this, { $element, isDirect });
}

setInheritance({ parent: HtmlElement, child: Main });

Main.prototype.conenctStore = function () {
  this.store = mainStore;
  mainStore.render = this.render.bind(this);
};

Main.prototype.setTemplate = function () {
  const { mockArr } = this.getState({ mockArr: null });
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
