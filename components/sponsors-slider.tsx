'use client';

import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '@/components/providers/i18n-provider';
import type { SponsorLogo } from '@/data/festivals';

type SponsorsSliderProps = {
  sponsors: SponsorLogo[];
};

function getSlidesToShow(width: number): number {
  if (width <= 520) return 2;
  if (width <= 860) return 3;
  if (width <= 1200) return 4;
  return 6;
}

export function SponsorsSlider({ sponsors }: SponsorsSliderProps) {
  const { t } = useI18n();
  const [columns, setColumns] = useState(1);
  const sponsorCards = useMemo(
    () =>
      sponsors.map((sponsor) => (
        <div key={`${sponsor.name}-${sponsor.creamLogoUrl}`} className="group relative flex min-h-[210px] items-center justify-center p-2">
          <a href={sponsor.url} target="_blank" rel="noreferrer" className="relative block w-full">
            <img
              className="mx-auto block w-[220px] max-w-full transition-opacity duration-300 md:w-[340px] xl:w-[390px] group-hover:opacity-0"
              src={sponsor.creamLogoUrl}
              alt={sponsor.name}
            />
            <img
              className="pointer-events-none absolute inset-0 m-auto w-[220px] max-w-[calc(100%-8px)] opacity-0 transition-opacity duration-300 md:w-[340px] xl:w-[390px] group-hover:opacity-100"
              src={sponsor.goldLogoUrl}
              alt={sponsor.name}
            />
          </a>
        </div>
      )),
    [sponsors],
  );

  useEffect(() => {
    const onResize = () => {
      const targetColumns = getSlidesToShow(window.innerWidth);
      setColumns(Math.min(targetColumns, Math.max(2, sponsors.length)));
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [sponsors.length]);

  return (
    <section className="multi-sections-blocks-inner-item-sponsor-logos sponsors-bg relative overflow-hidden py-24 md:py-32" id="sponzori">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,28,54,0.62)_0%,rgba(8,24,39,0.42)_48%,rgba(4,14,24,0.80)_100%)]" />

      <div className="relative mx-auto w-[min(1920px,97vw)]">
        <h2 className="text-center text-4xl font-black uppercase tracking-[0.1em] text-[#f3b026] md:text-5xl">{t('sponsors.title')}</h2>

        <div className="mt-8 md:mt-10 md:px-5">
          <div
            className="grid auto-rows-[minmax(190px,auto)] gap-x-3 gap-y-1 md:auto-rows-[minmax(240px,auto)] md:gap-x-4 md:gap-y-1"
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {sponsorCards}
          </div>
        </div>
      </div>
    </section>
  );
}
