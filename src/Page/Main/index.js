import ClickCard from '../../components/ClickCard/index.js';
import HtmlElement from '../../core/HtmlElement.js';
import { setInheritance } from '../../utils/manuplateDom.js';
import { increaseTargetValue } from './eventHandler.js';

export default function Main($element) {
  HtmlElement.call(this, $element);
}

setInheritance({ parent: HtmlElement, child: Main });

Main.prototype.setTemplate = function () {
  const { first, second, third, firth, mockArr } = this.store.state;
  return mockArr
    ?.map((clickObj) => {
      const $clickcard = new ClickCard(this.$element, clickObj);
      $clickcard.init(this.store);
      return $clickcard.setTemplate();
    })
    .join('');
};

Main.prototype.renderChild = function () {};

Main.prototype.setEvent = function () {
  const { handleClick } = this.eventHandler;
  this.$element.addEventListener('click', handleClick.bind(this));
};

Main.prototype.eventHandler = {
  handleClick: function (event) {
    const {
      target: {
        dataset: { clickType },
      },
    } = event;
    if (!clickType) return;
    const { mockArr } = this.store.state;
    const newMockArr = increaseTargetValue(clickType, mockArr);
    this.store.setState({ mockArr: newMockArr });
  },
};
