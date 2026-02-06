"use client";

import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function NavBar() {
  const t = useTranslations('Global.nav');
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
        <Image src="/logo.svg" alt="Robert Strobl" width={140} height={44.883} priority />

        <button id="menu-toggle" className={`menu-toggle ` + (menuOpen ? "nav-open" : "") } onClick={() => toggleMenu()}>
          <span className="menu-toggle-bar menu-toggle-bar--top"></span>
          <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
          <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
        </button>
      </nav>
      <div className={`menu ` + (menuOpen ? "open" : "")}>
        <ul>
          <li>
            <Link href="#about" onClick={toggleMenu}>{t('about')}</Link>
          </li>
          <li>
            <Link href="#services" onClick={toggleMenu}>{t('services')}</Link>
          </li>
          <li>
            <Link href="#work" onClick={toggleMenu}>{t('work')}</Link>
          </li>
          <li>
            <Link href="#clients" onClick={toggleMenu}>{t('clients')}</Link>
          </li>
          <li>
            <Link href="#contact" onClick={toggleMenu}>{t('contact')}</Link>
          </li>
          <li className="mt-8">
          <div className="align-middle justify-center flex flex-row items-center">
            <Link href="/en" onClick={toggleMenu} className="p-4">EN</Link>
            <div className="align-middle justify-center">|</div>
            <Link href="/de" onClick={toggleMenu} className="p-4">DE</Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
