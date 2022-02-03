export class Excel {
  constructor(selector: string, options: any) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }
}
