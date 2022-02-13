import { CODES } from './constants';
import {
  createRow, toCell, toChar, toColumn,
} from './helpers';

export const createTable = (rowsCount: number = 15): string => {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('');

  // console.log(cols);

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i += 1) {
    const cells = new Array(colsCount).fill('').map(toCell).join('');

    rows.push(createRow(i + 1, cells));
  }

  return rows.join('');
};
