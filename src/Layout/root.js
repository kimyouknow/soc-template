import { createElement } from '../utils/fetchData';

export default function Root() {
  const $rootWrapper = document.getElementById('root');
  const $element = createElement('div', $rootWrapper);
  return $element;
}
