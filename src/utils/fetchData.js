export async function fetchData(url) {
  try {
    const data = await fetch(url);
    return data.json();
  } catch (err) {
    console.log(err);
  }
}

export const createElement = ({ tagName, className, id, attrs }) => {
  const element = document.createElement(tagName);
  if (className) {
    if (Array.isArray(className)) element.className = className.join(' ');
    else element.className = className;
  }
  if (id) {
    element.id = id;
  }
  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }
  return element;
};

export function $(selector, scope = document) {
  if (!selector) throw 'no selector';

  return scope.querySelector(selector);
}

export function $$(selector, scope = document) {
  if (!selector) throw 'no selector';

  return Array.from(scope.querySelectorAll(selector));
}
