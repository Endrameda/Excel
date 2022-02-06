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

    this.components.forEach((Component) => {
      const $el = $.create('div', Component.className);
      const components = new Component($el);

      $el.html(Component.toHTML());

      $root.append($el);
    });

    return $root;
  }

  render() {
    this.$el?.append(this.getRoot().$el);
  }
}
