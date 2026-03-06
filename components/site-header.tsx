'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Countdown } from '@/components/countdown';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
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
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="domov" className="sticky top-0 z-50 border-b border-white/15 bg-[#0a2731]/95 backdrop-blur-md">
      <div
        className={cn(
          'overflow-hidden border-b border-white/10 bg-white text-[#222] transition-all duration-300',
          scrolled ? 'max-h-0 opacity-0' : 'max-h-28 opacity-100',
        )}
      >
        <div className="mx-auto flex w-[min(1310px,92vw)] flex-wrap items-center justify-center gap-2 py-2 text-center">
          <p className="text-sm font-bold sm:text-base">
            COUNTDOWN TO {edition.title.toUpperCase()} {edition.year}
          </p>
          <Countdown startIso={edition.countdownStartsAtIso} endIso={edition.startsAtIso} />
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          scrolled ? 'max-h-28 opacity-100' : 'pointer-events-none max-h-0 opacity-0',
        )}
      >
        <div className="mx-auto flex w-[min(1310px,92vw)] items-center justify-between gap-3 py-4">
          <div className="flex items-center gap-3">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 rounded-lg border border-white/20 bg-white/5 text-[#fcefdd] hover:bg-white/10"
                  aria-label="Otvorit menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent className="slide-nav-main">
                <SheetHeader>
                  <SheetTitle>{edition.title}</SheetTitle>
                </SheetHeader>

                <nav className="space-y-1" aria-label="Mobilna navigacia">
                  {navItems.map((item) => (
                    <div key={`mobile-${item.href}`}>
                      {item.isInternalRoute ? (
                        <SheetClose asChild>
                          <Link className="block rounded-md px-3 py-2 text-lg font-semibold hover:bg-white/10" href={item.href}>
                            {item.label}
                          </Link>
                        </SheetClose>
                      ) : (
                        <SheetClose asChild>
                          <a className="block rounded-md px-3 py-2 text-lg font-semibold hover:bg-white/10" href={item.href}>
                            {item.label}
                          </a>
                        </SheetClose>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="space-y-1 text-sm text-[#fff6e8]/90">
                    <SheetClose asChild>
                      <a className="block rounded-md px-3 py-2 hover:bg-white/10" href="#program">
                        Harmonogram
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a className="block rounded-md px-3 py-2 hover:bg-white/10" href="#mapy">
                        Parkovanie
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a className="block rounded-md px-3 py-2 hover:bg-white/10" href="#faq">
                        Prakticke info
                      </a>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <a className="text-sm font-black uppercase tracking-[0.2em] text-[#f3b026] sm:text-base" href="#domov">
              {edition.title}
            </a>
          </div>

          <nav className="hidden lg:block" aria-label="Hlavna navigacia">
            <ul className="flex items-center gap-7 text-sm font-semibold uppercase tracking-[0.12em] text-[#fff6e8]">
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.isInternalRoute ? (
                    <Link className="transition-colors hover:text-[#f3b026]" href={item.href}>
                      {item.label}
                    </Link>
                  ) : (
                    <a className="transition-colors hover:text-[#f3b026]" href={item.href}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <Button asChild className="hidden sm:inline-flex">
            <a href="#program">Program dna</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
