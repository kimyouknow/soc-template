import { createElement } from '../utils/manuplateDom.js';

export default function Header() {
  const $element = createElement({ tag: 'header' });
  const render = () =>
    ($element.innerHTML = `
    <div>this is header</div>
  `);
  render();
  return $element;
}
