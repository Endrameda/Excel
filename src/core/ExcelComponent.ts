import { DOMListener } from './DOMListener';
import { ExcelComponentOptions } from './types';

export class ExcelComponent extends DOMListener {
  private name: string;

  constructor($root: any, options: ExcelComponentOptions) {
    super($root, options?.listeners);
    this.name = options?.name || '';
  }

  // return component template
  static toHTML(): string {
    return '';
  }

  init() {
    this.initOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
  }
}
