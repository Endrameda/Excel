import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './table.template';
import { DOM } from '../../core/DOM/DOM';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root: DOM) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown'],
    });
  }

  static toHTML(): string {
    return createTable(500);
  }

  onClick() {
    console.log('onClick');
  }

  onMousedown() {
    console.log('onMousedown');
  }
}
