import ClickCard from '../../components/ClickCard/index.js';
import HtmlElement from '../../core/HtmlElement.js';
import { setInheritance } from '../../utils/manuplateDom.js';
import { handleClick } from './eventHandler.js';

export default function Main($element) {
  HtmlElement.call(this, $element);
}

setInheritance({ parent: HtmlElement, child: Main });

Main.prototype.setTemplate = function () {
  const {
    state: { mockArr },
  } = this.store;
  return mockArr
    ?.map((clickObj) => {
      const $clickcard = new ClickCard(this.$element, clickObj);
      $clickcard.init(this.store);
      return $clickcard.setTemplate();
    })
    .join('');
};

Main.prototype.setEvent = function () {
  this.$element.addEventListener('click', handleClick.bind(this));
};
