import { CODES } from './constants';
import { Nullable } from '../../types/globalTypes';

export const createRow = (index: Nullable<number>, content?: string): string => {
  const resizer = index ? '<div class="row-resize"></div>' : '';

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

export const toColumn = (col: string): string => `
    <div class="column">
        ${col}
        <div class="col-resize"></div>
    </div>
`;

export const toCell = (cell: string): string => `<div class="cell" contenteditable="">${cell}</div>`;

export const toChar = (_: string, index: number) => String.fromCharCode(CODES.A + index);
