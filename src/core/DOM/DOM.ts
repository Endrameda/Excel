import { DOMSelector } from './types';
import { Nullable, StringUndefined } from '../../types/globalTypes';

export class DOM {
    private $el: Nullable<HTMLElement>;
    $publicEl: Nullable<HTMLElement>;

    constructor(selector: DOMSelector) {
        this.$el = typeof selector === 'string'
            ? document.querySelector<HTMLElement>(selector)
            : selector;
        this.$publicEl = typeof selector === 'string'
            ? document.querySelector<HTMLElement>(selector)
            : selector;
    }

    html(html: StringUndefined | HTMLElement): this | StringUndefined {
        if (typeof html === 'string') {
            this.$el!.innerHTML = html;
            return this;
        }

        return this.$el?.outerHTML.trim();
    }

    clear() {
        this.html('');
        return this;
    }

    append(node: any) {
        if (node instanceof DOM) {
            // eslint-disable-next-line no-param-reassign
            node = node.$el;
        }

        this.$el?.append(node);
    }

    on(eventType: string, callback: any) {
        this.$el?.addEventListener(eventType, callback);
    }

    off(evenType: string, callback: any) {
        this.$el?.removeEventListener(evenType, callback);
    }

    closest(selector: string) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return $(this.$el?.closest(selector) as HTMLElement);
    }

    getClientCords(): Nullable<DOMRect> {
        return this.$el?.getBoundingClientRect();
    }

    get data() {
        return (this.$el as HTMLElement)?.dataset;
    }

    findAll(selector: any) {
        return this.$el?.querySelectorAll(selector);
    }

    css(styles: any = {}) {
        Object.keys(styles).forEach((key: any) => {
            if (this.$el) this.$el.style[key] = styles[key];
        });
    }
}

export function $(selector: DOMSelector) {
    return new DOM(selector);
}

$.create = (tagName: string, className: string = ''): DOM => {
    const el = document.createElement(tagName);

    if (className) {
        el.classList.add(className);
    }

    return $(el);
};
