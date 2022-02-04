import { ExcelOptionsType, ExcelSelectorType } from './types';

export class Excel {
  constructor(selector: ExcelSelectorType, options: ExcelOptionsType) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }
}
