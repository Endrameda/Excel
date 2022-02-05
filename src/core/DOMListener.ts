export class DOMListener {
  private $root;

  constructor($root: any) {
    if (!$root) {
      throw new Error('No $root provided from DomListener!');
    }
    this.$root = $root;
  }
}
