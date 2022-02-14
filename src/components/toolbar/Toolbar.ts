import { ExcelComponent } from '../../core/ExcelComponent';
import { DOM } from '../../core/DOM/DOM';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  constructor($root: DOM) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    });
  }

  static toHTML(): string {
    return `
      <div class="button">
        <i class="material-icons">format_align_left</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_center</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_right</i>
      </div>

      <div class="button">
        <i class="material-icons">format_bold</i>
      </div>

      <div class="button">
        <i class="material-icons">format_italic</i>
      </div>

      <div class="button">
        <i class="material-icons">format_underlined</i>
      </div>
    `;
  }

  onClick(event: any) {
    console.log(event);
  }
}
