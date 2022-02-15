import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './table.template';
import { DOM } from '../../core/DOM/DOM';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root: DOM) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  static toHTML(): string {
    return createTable(500);
  }

  onMousedown(event: MouseEvent) {
    const element = event.target as HTMLElement;
    console.log(element.dataset.resize);
  }
}
