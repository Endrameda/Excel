import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './table.template';
import { DOM } from '../../core/DOM/DOM';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root: DOM) {
    super($root, {
      name: 'Table',
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
    });
  }

  static toHTML(): string {
    return createTable(500);
  }
}
