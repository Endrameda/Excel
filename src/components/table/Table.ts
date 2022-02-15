import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './table.template';
import { $, DOM } from '../../core/DOM/DOM';

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

      document.onmousemove = (mousemoveEvent) => {
        const delta = mousemoveEvent.pageX - cords!.right;
        const value = cords!.width + delta;
        const $el = $parent.$publicEl as HTMLElement;

        $el.style.width = `${value}px`;
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }
}
