import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './table.template';
import { DOM } from '../../core/DOM/DOM';
import { TableResizeHandler } from './helpers';
import { TableSelection } from './TableSelection';

export class Table extends ExcelComponent {
    static className = 'excel__table';
    private selection: TableSelection;

    constructor($root: DOM) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown'],
        });
    }

    static toHTML(): string {
        return createTable(500);
    }

    init() {
        super.init();

        this.selection = new TableSelection();
        console.log('Table init');
    }

    onMousedown(event: MouseEvent) {
        TableResizeHandler(event, this.$root);
    }
}
