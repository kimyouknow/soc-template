import { createElement } from '../utils/manuplateDom.js';

export default function Main() {
  const $element = createElement({ tag: 'main', id: 'main' });
  $element.innerHTML = `
    <div>this is main</div>
  `;
  return $element;
}
