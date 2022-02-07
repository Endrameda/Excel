export class DOMListener {
  private $root;
  private listeners: Array<any>;

  constructor($root: any, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided from DomListener!');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initOMListeners() {}

  removeDOMListeners() {}
}
