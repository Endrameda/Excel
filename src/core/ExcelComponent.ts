import { DOMListener } from './DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root: any, options: any = {}) {
    super($root, options.listeners);
  }

  // return component template
  static toHTML(): string {
    return '';
  }

  init() {
    this.initOMListeners();
  }
}
