import { ExcelComponent } from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root: any) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }

  static toHTML(): string {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  static onInput(event: any) {
    console.log('Formula: onInput ', event);
  }
}
