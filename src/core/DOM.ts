class DOM {

}

export function $() {
  return new DOM();
}

$.create = (tagName: string, className: string): HTMLElement => {
  const el = document.createElement(tagName);

  if (className) {
    el.classList.add(className);
  }

  return el;
};
