import { ExcelOptionsType, ExcelSelectorType } from './types';

export class Excel {
  private $el: Element | null;
  private components: Array<any>;

  constructor(selector: ExcelSelectorType, options: ExcelOptionsType) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot(): HTMLElement {
    const $root = document.createElement('div');

    this.components.forEach((Component) => {
      $root.insertAdjacentHTML('beforeend', Component.toHTML());
    });

    return $root;
  }

  render() {
    this.$el?.append(this.getRoot());
  }
}
