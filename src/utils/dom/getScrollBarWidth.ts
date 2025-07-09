let cachedScrollbarWidth: number | null = null;
let windowOuter: number = window.outerWidth;

// I can't rewrite this i'm done with this....
export function getScrollbarWidth() {
    if (cachedScrollbarWidth !== null && window.outerWidth === windowOuter) {
        return cachedScrollbarWidth;
    }

    const outer = document.createElement('div');

    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    if ("msOverflowStyle" in outer.style) {
        outer.style.msOverflowStyle = 'scrollbar';
    }
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    document.body.removeChild(outer);

    windowOuter = window.outerWidth;
    cachedScrollbarWidth = scrollbarWidth;
    return scrollbarWidth;
}