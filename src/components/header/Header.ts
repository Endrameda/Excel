import { ExcelComponent } from '../../core/ExcelComponent';

export class Header extends ExcelComponent {
  static toHTML(): string {
    return '<h1>Header</h1>';
  }
}
