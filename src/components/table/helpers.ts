import { CODES } from './constants';
import { Nullable } from '../../types/globalTypes';

export const createRow = (index: Nullable<number>, content?: string): string => {
  const resizer = index ? '<div class="row-resize" data-resize="row"></div>' : '';

  return `
    <div class="row">
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
