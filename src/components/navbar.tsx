"use client";

import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <header>
      <nav>
        <Image src="logo.svg" alt="Robert Strobl" width={140} height={44.883} priority />

        <button id="menu-toggle" className={`menu-toggle ` + (menuOpen ? "nav-open" : "") } onClick={() => toggleMenu()}>
          <span className="menu-toggle-bar menu-toggle-bar--top"></span>
          <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
          <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
        </button>
      </nav>
      <div className={`menu ` + (menuOpen ? "open" : "")}>
        <ul>
          <li>
            <Link href="/#home" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link href="/#services" onClick={toggleMenu}>Services</Link>
          </li>
          <li>
            <Link href="/#clients" onClick={toggleMenu}>Clients</Link>
          </li>
          <li>
            <Link href="/#contact" onClick={toggleMenu}>Contact</Link>
          </li>
          {/*<li className="mt-8">
          <div className="align-middle justify-center flex flex-row items-center">
            <Link href="/de" onClick={toggleMenu} className="p-4">DE</Link>
            <div className="align-middle justify-center">|</div>
            <Link href="/en" onClick={toggleMenu} className="p-4">EN</Link>
          </div> 
          </li>*/}
        </ul>
      </div>
    </header>
  );
}