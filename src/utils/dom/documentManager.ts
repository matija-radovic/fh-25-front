export type Lock = {
    value: string,
    release: () => void
}
class D {
    #locks: Lock[];

    constructor() {
        this.#locks = [];
    }

    get #rootElement() {
        return document.getElementById('root')!
    }

    #updateBodyOverflow() {
        if (this.#locks.length > 0) {
            document.body.style.overflowY = this.#locks[0].value;
        } else {
            document.body.style.removeProperty('overflow-y')
        }
    }

    /**Returns a lock to unlock the scroll back to it's original state or next one in queue */
    lockScroll(value: string): Lock {
        const token: Lock = {
            value,
            release: () => {
                const index = this.#locks.indexOf(token);
                if (index === -1) return; // Already released
                this.#locks.splice(index, 1);
                if (index === 0) this.#updateBodyOverflow();
                console.log(this.#locks);
            }
        };

        this.#locks.push(token);

        if (this.#locks.length === 1) {
            document.body.style.overflowY = value;
        }

        return token;
    }

    enableInertRoot() {
        const root = this.#rootElement;
        if ('inert' in HTMLElement.prototype) {
            root.inert = true;
        }
    }
    disableInertRoot() {
        const root = this.#rootElement;
        if ('inert' in HTMLElement.prototype) {
            root.inert = false;
        }
    }
}

export const documentManager = new D();