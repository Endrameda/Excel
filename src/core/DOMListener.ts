import { getMethodName } from './helpers';

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

  initOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);

      // @ts-ignore
      if (!this[method]) {
        // @ts-ignore
        const { name } = this;
        throw new Error(
          `Method ${method} is not implemented in ${name} Component`,
        );
      }

      // @ts-ignore
      this.$root.on(listener, this[method].bind(this));
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);

      // @ts-ignore
      this.$root.off(listener, this[method]);
    });
  }
}
