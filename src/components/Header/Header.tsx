import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/Header/fh-logo.svg"
import { useState } from "react";



function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const closeBurger = () => setIsOpen(false);

    return (
        <header>
            <img className="header-logo" src={logo} alt="logo slika" />
            <div className={"header-container" + (isOpen ? " h-open" : "")}>
                <a onClick={closeBurger} href="#about-hackaton">O TAKMICENJU</a>
                <a onClick={closeBurger} href="#agenda">AGENDA</a>
                <a onClick={closeBurger} href="#awards">NAGRADE</a>
                <a onClick={closeBurger} href="#awards" >ISKUSTVA</a>
                <a onClick={closeBurger} href="#faq" >FAQ</a>
                <a onClick={closeBurger} href="#organizational-team" >ORGANIZACIONI TIM</a>
                <a onClick={closeBurger} href="#partners" >PRATNERI</a>
                <a onClick={closeBurger} href="#rulebook" >PRAVILNIK</a>
                <Link onClick={closeBurger} to="/prijava" className="hamburger-sign-up">PRIJAVI SE</Link>
            </div>
            <Link to="/prijava" className="header-sign-up">PRIJAVI SE</Link>
            <div className={"hamburger" + (isOpen ? " h-open" : "")} onClick={() => setIsOpen(!isOpen)}>
                <div className="hamburger-line" />
                <div className="hamburger-line" />
                <div className="hamburger-line" />

            </div>
        </header>
    );
}
export default Header