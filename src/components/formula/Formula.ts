import { ExcelComponent } from '../../core/ExcelComponent';
import { DOM } from '../../core/DOM/DOM';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root: DOM) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  static toHTML(): string {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event: any) {
    console.log('Formula: onInput ', event.target.textContent.trim());
  }

  onClick() {}
}
