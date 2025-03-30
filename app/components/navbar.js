"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    console.log("hekki");
    setMenuOpen((prev) => !prev);
    console.log(menuOpen);
  }

  return (
    <nav>
      <div className="navWrapper">
        <Link href="/">
          <img src="/icons/navbarLogo.svg" alt="MainLogo" />
        </Link>
        <div className="navMenu">
          <Link href="/">О проекте</Link>
          <Link href="/">инвесторам</Link>
          <Link href="/">школам</Link>
          <Link href="/">учащимся</Link>
          <Link href="/">Блог</Link>
        </div>
        <button className="navWrapperButton">скачать</button>
        <img
          src="/icons/mobHumbergerIcon.svg"
          alt="menu"
          onClick={toggleMenu}
          className="mobMenuBtn"
        />
      </div>

      <div className={`mobMenu ${menuOpen ? "visibleMobMenu" : ""}`}>
        <div className="mobMenuExit">
          <a href="#">
            <img src="/icons/navbarLogo.svg" alt="MainLogo" />
          </a>
          <img
            onClick={toggleMenu}
            src="/icons/close-menu.svg"
            alt="close menu"
          />
        </div>
        <div className="navMenu">
          <Link href="/">О проекте</Link>
          <Link href="/">инвесторам</Link>
          <Link href="/">школам</Link>
          <Link href="/">учащимся</Link>
          <Link href="/">Блог</Link>
        </div>
        <button className="navWrapperButton">скачать</button>
      </div>
    </nav>
  );
}
