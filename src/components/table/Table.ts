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

            console.log(type);

            const cols = type === resizersType.col
                ? this.$root.findAll(`[data-col="${$parent.data.col}"]`)
                : [];

            document.onmousemove = (mousemoveEvent) => {
                if (type === resizersType.col) {
                    const delta = mousemoveEvent.pageX - cords!.right;
                    const value = cords!.width + delta;

                    $parent.css({ width: `${value}px` });

                    cols.forEach((el: HTMLElement) => {
                        el.style.width = `${value}px`;
                    });
                } else {
                    const delta = mousemoveEvent.pageY - cords!.bottom;
                    const value = cords!.height + delta;

                    $parent.css({ height: `${value}px` });
                }
            };

            document.onmouseup = () => {
                document.onmousemove = null;
            };
        }
    }
}
