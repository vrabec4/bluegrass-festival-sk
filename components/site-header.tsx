'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Countdown } from '@/components/countdown';
import type { FestivalEdition } from '@/data/festivals';

type SiteHeaderProps = {
  edition: FestivalEdition;
  showYearNav: boolean;
};

type NavItem = {
  href: string;
  label: string;
  isInternalRoute?: boolean;
};

export function SiteHeader({ edition, showYearNav }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo<NavItem[]>(() => {
    const base: NavItem[] = [
      { href: '#kapely', label: 'Kapely' },
      { href: '#program', label: 'Program' },
      { href: '#mapy', label: 'Mapy' },
      { href: '#faq', label: 'FAQ' },
      { href: '#kontakt', label: 'Kontakt' },
    ];

    if (showYearNav) {
      base.push({ href: '/archiv', label: 'Archiv', isInternalRoute: true });
    }

    return base;
  }, [showYearNav]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.35);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`site-header header-home ${scrolled ? 'scrolled' : ''}`} id="domov">
      <div className="top-header">
        <div className="container">
          <div className="top-header-inner">
            <p>
              COUNTDOWN TO {edition.title.toUpperCase()} {edition.year}
            </p>
            <Countdown startIso={edition.countdownStartsAtIso} endIso={edition.startsAtIso} />
          </div>
        </div>
      </div>

      <div className="main-header container">
        <div className="main-header-left">
          <button
            type="button"
            className="hamburger-desk"
            aria-label="Otvorit menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="hamburger-desk-inner">
              <span />
              <span />
              <span />
            </span>
          </button>
          <a className="logo" href="#domov">
            {edition.title}
          </a>
        </div>

        <nav id="site-navigation" className="top-nav main-navigation" aria-label="Hlavna navigacia">
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.isInternalRoute ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <a href={item.href}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn header-cta" href="#program">
          Program dna
        </a>
      </div>

      <div className="slide-nav">
        <aside className={`slide-nav-main ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
          <button type="button" className="close-nav" onClick={closeMenu} aria-label="Zavriet menu" />

          <div className="header">
            <div className="logo slide-logo">{edition.title}</div>
          </div>

          <div className="nav">
            <ul id="menu-primary-menu" className="nav-menu">
              {navItems.map((item) => (
                <li key={`mobile-${item.href}`}>
                  {item.isInternalRoute ? (
                    <Link href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} onClick={closeMenu}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-2">
            <ul className="nav-menu">
              <li>
                <a href="#program" onClick={closeMenu}>
                  Harmonogram
                </a>
              </li>
              <li>
                <a href="#mapy" onClick={closeMenu}>
                  Parkovanie
                </a>
              </li>
              <li>
                <a href="#faq" onClick={closeMenu}>
                  Prakticke info
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <button
          type="button"
          className={`overlay ${menuOpen ? 'visible' : ''}`}
          aria-label="Zavriet menu"
          onClick={closeMenu}
        />
      </div>
    </header>
  );
}
