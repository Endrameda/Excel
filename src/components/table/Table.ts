import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './table.template';
import { $, DOM } from '../../core/DOM/DOM';
import { resizersType } from './types';

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

        if (element.dataset?.resize) {
            const $resizer = $(event.target as HTMLElement);
            const $parent = $resizer.closest('[data-type="resizable"]');
            const cords = $parent.getClientCords();
            const type = $resizer.data.resize;
            const sideProp = type === resizersType.col ? 'bottom' : 'right';

            let value: number;

            const cols = type === resizersType.col
                ? this.$root.findAll(`[data-col="${$parent.data.col}"]`)
                : [];
            const rows = type === resizersType.row
                ? this.$root.findAll(`[data-row="${$parent.data.row}"]`)
                : [];

            $resizer.css({ opacity: 1, [sideProp]: '-9999px' });

            document.onmousemove = (mousemoveEvent) => {
                if (type === resizersType.col) {
                    const delta = mousemoveEvent.pageX - cords!.right;
                    value = cords!.width + delta;
                    $resizer.css({ right: `${-delta}px` });
                } else {
                    const delta = mousemoveEvent.pageY - cords!.bottom;
                    value = cords!.height + delta;

                    $resizer.css({ bottom: `${-delta}px` });
                }
            };

            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;

                if (type === resizersType.col) {
                    cols.forEach((el: HTMLElement) => {
                        el.style.width = `${value}px`;
                    });
                } else {
                    rows.forEach((el: HTMLElement) => {
                        el.style.height = `${value}px`;
                    });
                }

                $resizer.css({ opacity: 0, bottom: 0, right: 0 });
            };
        }
    }
}
