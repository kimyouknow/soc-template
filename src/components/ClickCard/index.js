import HtmlElement from '../../core/HtmlElement.js';
import { setInheritance } from '../../utils/manuplateDom.js';

export default function ClickCard($element) {
  HtmlElement.call(this, $element);
}

setInheritance({ parent: HtmlElement, child: ClickCard });
