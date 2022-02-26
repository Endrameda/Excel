import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './table.template';
import { DOM } from '../../core/DOM/DOM';
import { shouldResize, TableResizeHandler } from './helpers';

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
        TableResizeHandler(event, this.$root);
    }
}
