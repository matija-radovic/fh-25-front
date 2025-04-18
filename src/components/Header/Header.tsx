import "./Header.scss";
import logo from "../../assets/Header/fh-logo.svg"
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import { navHashes } from "../../utils/constants/header/navigation";


const navLinksVariants: Variants = {
  hidden: {
    transform: "translateX(100%)",
    opacity: 0
  },
  visible: (custom: number) => ({
    transform: "translateX(0%)",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      delay: custom * 0.025  // Reverse stagger using custom delay
    },
  }),
  exit: (custom: number) => ({
    transform: "translateX(100%)",
    opacity: 0,
    transition: {
      duration: 0.1,
      delay: (navHashes.length - custom) * 0.0125 // Reverse stagger using custom delay 0.125
    }
  })
}
const navLinkMotionVariantsSetup = { initial: "hidden", animate: "visible", exit: "exit", variants: navLinksVariants }
const formatLinkText = (text: string) => text.replace(/-/g, " ");
const mqDesktop = () => window.matchMedia("only screen and (max-width: 1366px)").matches;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mqMatches, setMqMatches] = useState(mqDesktop);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleResize = () => setMqMatches(mqDesktop());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !burgerRef.current?.contains(event.target as Node)
      ) setIsOpen(false);
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const focusableItems = itemsRef.current.filter(Boolean) as HTMLDivElement[];
      const currentIndex = focusableItems.findIndex(el => document.activeElement === el.firstChild as Element);
      if (e.key === "Escape") {
        setIsOpen(false);
        burgerRef.current?.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = (currentIndex + 1) % focusableItems.length;
        (focusableItems[next]?.firstChild as HTMLAnchorElement)?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const previous = (currentIndex - 1) % focusableItems.length;
        (focusableItems[previous]?.firstChild as HTMLAnchorElement)?.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [mqMatches]);

  const closeBurger = () => setIsOpen(false);

  const renderSimpleLinks = () => (
    navHashes.map(v => (
      <div key={v} className="nav-link">
        <Link to={`#${v}`} onClick={closeBurger}>{formatLinkText(v)}</Link>
      </div>
    ))
  );

  const renderAnimatedLinks = () => (
    <AnimatePresence initial={false}>
      {isOpen && (
        <>
          {navHashes.map((v, i) => (
            <motion.div key={v} className="nav-link" {...navLinkMotionVariantsSetup} custom={i}
              ref={(el) => itemsRef.current[i] = el}
            >
              <Link to={`#${v}`} onClick={closeBurger}>{formatLinkText(v)}</Link>
            </motion.div>
          ))}
          <motion.div key="prijava" className="nav-link" {...navLinkMotionVariantsSetup} custom={navHashes.length}
            ref={(el) => itemsRef.current[navHashes.length] = el}
          >
            <Link to="/prijava" onClick={closeBurger}>PRIJAVI SE</Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <header>
      <img className="header-logo" src={logo} alt="fonis logo" />
      <div className={"nav-container" + (isOpen ? " h-open" : "")} ref={menuRef}>
        {mqMatches ? renderAnimatedLinks() : renderSimpleLinks()}
      </div>

      {!mqMatches ? (
        <Link to="/prijava" className="header-sign-up-button">PRIJAVI SE</Link>
      ) : (
        <button className={"hamburger" + (isOpen ? " h-open" : "")} onClick={() => setIsOpen(prev => !prev)}
          ref={burgerRef}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <div className="hamburger-line" />
          <div className="hamburger-line" />
          <div className="hamburger-line" />
        </button>
      )}
    </header>
  );
}
export default Header