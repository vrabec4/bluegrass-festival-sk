'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '@/components/providers/i18n-provider';
import { Button } from '@/components/ui/button';
import type { SponsorLogo } from '@/data/festivals';

type SponsorsSliderProps = {
  sponsors: SponsorLogo[];
};

function getSlidesToShow(width: number): number {
  if (width <= 520) return 2;
  if (width <= 760) return 3;
  if (width <= 980) return 4;
  if (width <= 1220) return 5;
  if (width <= 1480) return 6;
  return 7;
}

export function SponsorsSlider({ sponsors }: SponsorsSliderProps) {
  const { t } = useI18n();
  const [startIndex, setStartIndex] = useState(0);
  const [columns, setColumns] = useState(7);
  const pageSize = columns * 2;

  useEffect(() => {
    const onResize = () => {
      setColumns(getSlidesToShow(window.innerWidth));
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (sponsors.length <= pageSize) {
      return;
    }

    const timerId = setInterval(() => {
      setStartIndex((current) => (current + columns) % sponsors.length);
    }, 4500);

    return () => clearInterval(timerId);
  }, [columns, pageSize, sponsors.length]);

  const visibleSponsors = useMemo(() => {
    if (sponsors.length <= pageSize) {
      return sponsors;
    }

    const list: SponsorLogo[] = [];
    for (let i = 0; i < pageSize; i += 1) {
      list.push(sponsors[(startIndex + i) % sponsors.length]);
    }
    return list;
  }, [pageSize, sponsors, startIndex]);

  function goPrev() {
    setStartIndex((current) => (current - columns + sponsors.length) % sponsors.length);
  }

  function goNext() {
    setStartIndex((current) => (current + columns) % sponsors.length);
  }

  return (
    <section className="multi-sections-blocks-inner-item-sponsor-logos sponsors-bg relative overflow-hidden py-24 md:py-32" id="sponzori">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,28,54,0.62)_0%,rgba(8,24,39,0.42)_48%,rgba(4,14,24,0.80)_100%)]" />

      <div className="relative mx-auto w-[min(1800px,96vw)]">
        <h2 className="text-center text-4xl font-black uppercase tracking-[0.1em] text-[#f3b026] md:text-5xl">{t('sponsors.title')}</h2>

        <div className="our_sponsors_slider slick-initialized slick-slider mt-8 flex items-center gap-3 md:mt-10 md:gap-4 md:px-5">
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="h-12 w-11 rounded-xl bg-[#164859]/80 md:h-[74px] md:w-16"
            onClick={goPrev}
            aria-label={t('sponsors.previousSponsor')}
          >
            <ChevronLeft className="size-5" />
          </Button>

          <div
            className="grid flex-1 auto-rows-[minmax(92px,auto)] gap-x-3 gap-y-2 md:auto-rows-[minmax(120px,auto)] md:gap-x-4"
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {visibleSponsors.map((sponsor) => (
              <div key={`${sponsor.name}-${sponsor.creamLogoUrl}`} className="group relative flex min-h-[110px] items-center justify-center p-2">
                <a href={sponsor.url} target="_blank" rel="noreferrer" className="relative block w-full">
                  <img
                    className="mx-auto block w-[122px] max-w-full transition-opacity duration-300 md:w-[168px] group-hover:opacity-0"
                    src={sponsor.creamLogoUrl}
                    alt={sponsor.name}
                  />
                  <img
                    className="pointer-events-none absolute inset-0 m-auto w-[122px] max-w-[calc(100%-20px)] opacity-0 transition-opacity duration-300 md:w-[168px] group-hover:opacity-100"
                    src={sponsor.goldLogoUrl}
                    alt={sponsor.name}
                  />
                </a>
              </div>
            ))}
          </div>

          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="h-12 w-11 rounded-xl bg-[#164859]/80 md:h-[74px] md:w-16"
            onClick={goNext}
            aria-label={t('sponsors.nextSponsor')}
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
