import { CODES } from './constants';
import { Nullable } from '../../types/globalTypes';
import { $ } from '../../core/DOM/DOM';
import { resizersType } from './types';

export const createRow = (index: Nullable<number>, content?: string): string => {
    const resizer = index ? '<div class="row-resize" data-resize="row"></div>' : '';

    return `
    <div class="row" data-type="resizable" data-row="${index || ''}">
        <div class="row-info">
            ${index || ''}
            ${resizer}
        </div>
        <div class="row-data">${content}</div>
    </div>
  `;
};

export const toColumn = (col: string, index: number): string => `
    <div class="column" data-type="resizable" data-col="${index}">
        ${col}
        <div class="col-resize" data-resize="col"></div>
    </div>
`;

export const toCell = (_: string, col: number): string => `
    <div class="cell" contenteditable="" data-col="${col}"></div>
    `;

export const toChar = (_: string, index: number) => String.fromCharCode(CODES.A + index);

export const TableResizeHandler = (
    event: MouseEvent,
    $root: { findAll: (arg1: string) => any; },
) => {
    const element = event.target as HTMLElement;

    if (element.dataset?.resize) {
        const $resizer = $(event.target as HTMLElement);
        const $parent = $resizer.closest('[data-type="resizable"]');
        const cords = $parent.getClientCords();
        const type = $resizer.data.resize;
        const sideProp = type === resizersType.col ? 'bottom' : 'right';

        let value: number;

        const cols = type === resizersType.col
            ? $root.findAll(`[data-col="${$parent.data.col}"]`)
            : [];
        const rows = type === resizersType.row
            ? $root.findAll(`[data-row="${$parent.data.row}"]`)
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
};
