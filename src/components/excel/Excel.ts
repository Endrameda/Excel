import { ExcelOptionsType, ExcelSelectorType } from './types';

export class Excel {
  private $el: Element | null;
  private components: Array<any>;

  constructor(selector: ExcelSelectorType, options: ExcelOptionsType) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }
}
