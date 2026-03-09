'use client';

import { useMemo } from 'react';
import { useI18n } from '@/components/providers/i18n-provider';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { Band } from '@/data/festivals';

type FeaturedArtistsSliderProps = {
  bands: Band[];
};

export function FeaturedArtistsSlider({ bands }: FeaturedArtistsSliderProps) {
  const { t } = useI18n();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const bandCards = useMemo(
    () =>
      bands.map((band) => {
        const imageUrl = band.imageUrl.startsWith('/') ? `${basePath}${band.imageUrl}` : band.imageUrl;

        return (
          <Card
            key={`${band.name}-${band.time}`}
            className="h-full overflow-hidden border-white/10 bg-[#0e2231]/70 transition-all duration-300 hover:scale-[1.02] hover:border-[#f3b026]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            <a href="#program" title={band.name}>
              <div className="aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(20,60,82,0.65)_0%,rgba(7,17,27,0.95)_100%)]">
                <img src={imageUrl} alt={band.name} loading="lazy" className="h-full w-full object-contain transition duration-500" />
              </div>
              <div className="space-y-1 p-5 text-center">
                <h3 className="text-xl font-bold uppercase tracking-[0.08em] text-[#fcefdd]">{band.name}</h3>
                <div className="text-2xl font-black text-[#f3b026]">{band.time}</div>
              </div>
            </a>
          </Card>
        );
      }),
    [bands, basePath],
  );

  return (
    <section className="py-16 md:py-24" id="kapely">
      <div className="mx-auto w-[min(1480px,95vw)]">
        <h2 className="text-center text-4xl font-black uppercase tracking-[0.16em] text-[#f3b026] md:text-5xl">{t('featured.title')}</h2>
        <p className="mt-2 text-center text-sm uppercase tracking-[0.16em] text-[#fff6e8]/70">{t('featured.sliderLabel')}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:mt-10">
          {bandCards}
        </div>

        <div className="mt-9 flex justify-center">
          <Button asChild>
            <a href="#program">{t('featured.fullSchedule')}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
