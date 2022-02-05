import { ExcelComponent } from '../../core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static toHTML(): string {
    return '<h1>Toolbar</h1>';
  }
}
