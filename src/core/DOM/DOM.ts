import { DOMSelector } from './types';
import { Nullable, StringUndefined } from '../../types/globalTypes';

class DOM {
  private $el: Nullable<Element>;

  constructor(selector: DOMSelector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
  }

  html(html: StringUndefined | HTMLElement): this | StringUndefined {
    if (typeof html === 'string') {
      this.$el!.innerHTML = html;
      return this;
    }

    return this.$el?.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  append(node: any) {
    if (node instanceof DOM) {
      // eslint-disable-next-line no-param-reassign
      node = node.$el;
    }

    this.$el?.append(node);
  }

  on(eventType: string, callback: any) {
    this.$el?.addEventListener(eventType, callback);
  }

  off(evenType: string, callback: any) {
    this.$el?.removeEventListener(evenType, callback);
  }
}

export function $(selector: DOMSelector) {
  return new DOM(selector);
}

$.create = (tagName: string, className: string = ''): DOM => {
  const el = document.createElement(tagName);

  if (className) {
    el.classList.add(className);
  }

  return $(el);
};
