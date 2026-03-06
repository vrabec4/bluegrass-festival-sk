'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useI18n } from '@/components/providers/i18n-provider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { FestivalEdition } from '@/data/festivals';

type HeroSliderProps = {
  edition: FestivalEdition;
};

export function HeroSlider({ edition }: HeroSliderProps) {
  const { t } = useI18n();
  const slides = edition.heroSlides;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const timerId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timerId);
  }, [slides.length]);

  function goTo(index: number) {
    setActiveIndex(index);
  }

  function goPrev() {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  }

  function goNext() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  return (
    <section className="relative" id="main-hero-banner">
      <div className="relative min-h-[560px] overflow-hidden md:min-h-[640px]">
        {slides.map((slide, index) => (
          <div
            key={`${slide.heading}-${slide.imageUrl}`}
            className={cn(
              'banner-slider-item absolute inset-0 transition-opacity duration-700',
              index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
            style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,32,0.25)_0%,rgba(6,20,32,0.74)_72%,rgba(6,20,32,0.9)_100%)]" />

            <div className="relative mx-auto flex h-full min-h-[560px] w-[min(1310px,92vw)] flex-col justify-between py-14 md:min-h-[640px] md:py-20">
              <div>
                <div className="inline-flex rounded-md border border-white/20 bg-[#07111b]/65 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#f3b026]">
                  {edition.title}
                </div>
              </div>

              <div className="max-w-3xl">
                <h2 className="text-4xl font-black leading-[0.94] tracking-tight text-white md:text-7xl">{slide.heading}</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {slide.actions.map((action) => (
                  <Button key={action.href + action.label} asChild variant="outline" className="uppercase tracking-[0.08em]">
                    <a href={action.href}>{action.label}</a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ))}

        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-xl bg-[#164859]/80 sm:left-8"
          onClick={goPrev}
          aria-label={t('hero.previousSlide')}
        >
          <ChevronLeft className="size-5" />
        </Button>

        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-xl bg-[#164859]/80 sm:right-8"
          onClick={goNext}
          aria-label={t('hero.nextSlide')}
        >
          <ChevronRight className="size-5" />
        </Button>

        <ul className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2" aria-label={t('hero.selectSlide')}>
          {slides.map((slide, index) => (
            <li key={`dot-${slide.heading}`}>
              <button
                type="button"
                className={cn(
                  'h-2.5 w-2.5 rounded-full border border-white/70 transition-all',
                  index === activeIndex ? 'w-7 bg-[#f3b026] border-[#f3b026]' : 'bg-transparent hover:bg-white/30',
                )}
                onClick={() => goTo(index)}
                aria-label={t('hero.slideLabel', { index: index + 1 })}
              />
            </li>
          ))}
        </ul>

        <div className="banner-slider-bottom-strip absolute inset-x-0 bottom-0 z-20 border-t border-white/20 bg-[#07111b]/70 backdrop-blur-sm">
          <div className="mx-auto flex w-[min(1310px,92vw)] items-center justify-center py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-[#f3b026] sm:text-base">
            <span>{edition.dateLabel}</span>
            <span className="mx-3 text-[#00b3e7]">BG</span>
            <span>{edition.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
