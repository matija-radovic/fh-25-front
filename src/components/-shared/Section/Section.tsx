import { forwardRef, ReactNode } from 'react';

type SectionProps = {
  heading?: string;
  className?: string | string[];
  isContainer?: boolean;
  id?: string;
  children: ReactNode | ReactNode[];
};

/**
 * Uokviruje vašu komponentu i dodaje joj automatski stil container, ukoliko ne želite container klasu samo proslediti komponenti parametar `container={false}`
 */
const Section = forwardRef<HTMLElement, SectionProps>(
  ({ heading, className = "", isContainer = true, children, id }, ref) => {
    if (className && typeof className === "object" && Array.isArray(className)) {
        className = className.join(" ");
    }
    if (isContainer) {
        className = "container" + (className ? " " + className : "");
    }

    return (
        <section className={className} ref={ref} id={id}>
            {!heading ? undefined : (
                <h1>{heading}</h1>
            )}
            {children}
        </section>
    )
})

export default Section