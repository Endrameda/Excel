import { ExcelOptionsType, ExcelSelectorType } from './types';
import { $ } from '../../core/DOM/DOM';

export class Excel {
  private $el: Element | null;
  private components: Array<any>;

  constructor(selector: ExcelSelectorType, options: ExcelOptionsType) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot(): any {
    const $root = $.create('div', 'excel');

    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);

      // DEBUG
      if (component.name) {
        // @ts-ignore
        window[`c${component.name}`] = component;
      }

      $el.html(Component.toHTML());

      $root.append($el);

      return component;
    });

    return $root;
  }

  render() {
    this.$el?.append(this.getRoot().$el);

    this.components.forEach((component) => component.init());
  }
}
