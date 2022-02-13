const CODES = {
  A: 65,
  Z: 90,
};

const createRow = (content?: string): string => `
    <div class="row">
        <div class="row-info"></div>
        <div class="row-data">${content}</div>
    </div>
  `;

const toColumn = (col: string): string => `<div class="column">${col}</div>`;

const createCell = (): string => `
  <div class="cell" contenteditable="">A1</div>
`;

const toChar = (_: string, index: number) => String.fromCharCode(CODES.A + index);

export const createTable = (rowsCount: number = 15): string => {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('');

  // console.log(cols);

  rows.push(createRow(cols));

  for (let i = 0; i < rowsCount; i += 1) {
    rows.push(createRow());
  }

  return rows.join('');
};
