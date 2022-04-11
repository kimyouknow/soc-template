import Header from './Header.js';
import { createElement } from '../utils/manuplateDom.js';
import Main from './Main.js';

export default function Root() {
  const $element = createElement({ tag: 'root' });
  const $$children = [Header(), Main()];
  $element.append(...$$children);
  return $element;
}
