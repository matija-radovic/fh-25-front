import { ReactNode } from 'react';

/**
 * Uokviruje vašu komponentu i dodaje joj automatski stil container, ukoliko ne želite container klasu samo proslediti komponenti parametar `cotainer={false}`
 */
const Section = ({ heading = undefined, className = "", isContainer = true, children }:
    { heading?: string | undefined, className?: Array<string> | string, isContainer?: boolean, children: ReactNode | ReactNode[] }) => {
    if (className && typeof className === "object" && Array.isArray(className)) {
        className = className.join(" ");
    }
    if (isContainer) {
        className = "container" + (className ? " " + className : "");
    }

    return (
        <section className={className}>
            {!heading ? undefined : (
                <h1>{heading}</h1>
            )}
            {children}
        </section>
    )
}

export default Section