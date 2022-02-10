import { DOMListener } from './DOMListener';

export class ExcelComponent extends DOMListener {
  private name: string;

  constructor($root: any, options: any = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  // return component template
  static toHTML(): string {
    return '';
  }

  init() {
    this.initOMListeners();
  }
}
