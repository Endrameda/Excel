const CODES = {
  A: 65,
  Z: 90,
};

const createCol = (): string => `
    <div class="column">
    A
    </div>
  `;

const createRow = (content?: string): string => `
    <div class="row">
        <div class="row-info"></div>
        <div class="row-data">${content}</div>
    </div>
  `;

const createCell = (): string => `
  <div class="cell" contenteditable="">A1</div>
`;

export const createTable = (rowsCount: number = 15): string => {
  const colsCount = CODES.Z - CODES.A;
  const rows = [];

  const cols = new Array(colsCount).fill('');

  console.log(cols);

  rows.push(createRow());

  for (let i = 0; i < rowsCount; i += 1) {
    rows.push(createRow());
  }

  return rows.join('');
};
