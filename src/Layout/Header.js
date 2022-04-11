import { createElement } from '../utils/manuplateDom.js';

export default function Header() {
  const $element = createElement({ tag: 'header' });
  $element.innerHTML = `
    <div>this is header</div>
  `;
  return $element;
}
