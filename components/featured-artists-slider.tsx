'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Band } from '@/data/festivals';

type FeaturedArtistsSliderProps = {
  bands: Band[];
};

function getSlidesToShow(width: number): number {
  if (width <= 700) return 1;
  if (width <= 1100) return 3;
  return 5;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function FeaturedArtistsSlider({ bands }: FeaturedArtistsSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const onResize = () => {
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (bands.length <= 1) {
      return;
    }

    const timerId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % bands.length);
    }, 4200);

    return () => clearInterval(timerId);
  }, [bands.length]);

  const slideWidth = useMemo(() => 100 / slidesToShow, [slidesToShow]);

  const translateX = useMemo(() => {
    if (bands.length <= slidesToShow) {
      return 0;
    }

    const centerOffset = Math.floor(slidesToShow / 2) * slideWidth;
    const rawTranslate = centerOffset - activeIndex * slideWidth;
    const minTranslate = -(bands.length - slidesToShow) * slideWidth;
    return clamp(rawTranslate, minTranslate, 0);
  }, [activeIndex, bands.length, slideWidth, slidesToShow]);

  function goPrev() {
    setActiveIndex((current) => (current === 0 ? bands.length - 1 : current - 1));
  }

  function goNext() {
    setActiveIndex((current) => (current + 1) % bands.length);
  }

  return (
    <section className="py-16 md:py-24" id="kapely">
      <div className="mx-auto w-[min(1310px,92vw)]">
        <h2 className="text-center text-4xl font-black uppercase tracking-[0.16em] text-[#f3b026] md:text-5xl">Kapely</h2>
        <p className="mt-2 text-center text-sm uppercase tracking-[0.16em] text-[#fff6e8]/70">
          featured-artists-slider slick-initialized slick-slider
        </p>

        <div className="relative mt-8 md:mt-10">
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-xl bg-[#164859]/80 md:inline-flex"
            onClick={goPrev}
            aria-label="Predchadzajuca kapela"
          >
            <ChevronLeft className="size-5" />
          </Button>

          <div className="overflow-hidden px-0 md:px-14">
            <div
              className="flex transition-transform duration-500"
              style={{
                width: `${bands.length * slideWidth}%`,
                transform: `translate3d(${translateX}%, 0px, 0px)`,
              }}
            >
              {bands.map((band, index) => {
                const isCurrent = index === activeIndex;

                return (
                  <div key={`${band.name}-${band.time}`} className="px-2 py-4" style={{ width: `${slideWidth}%` }}>
                    <Card
                      className={cn(
                        'h-full overflow-hidden border-white/10 bg-[#0e2231]/70 transition-all duration-300',
                        isCurrent && 'scale-[1.03] border-[#f3b026]/60 shadow-[0_20px_50px_rgba(0,0,0,0.4)]',
                      )}
                    >
                      <a href="#program" title={band.name}>
                        <div className="aspect-[3/4] overflow-hidden">
                          <img
                            src={band.imageUrl}
                            alt={band.name}
                            loading="lazy"
                            className={cn('h-full w-full object-cover transition duration-500', isCurrent && 'scale-105')}
                          />
                        </div>
                        <div className="space-y-1 p-4 text-center">
                          <h3 className="text-lg font-bold uppercase tracking-[0.08em] text-[#fcefdd]">{band.name}</h3>
                          <div className="text-xl font-black text-[#f3b026]">{band.time}</div>
                        </div>
                      </a>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-xl bg-[#164859]/80 md:inline-flex"
            onClick={goNext}
            aria-label="Dalsia kapela"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>

        <div className="mt-9 flex justify-center">
          <Button asChild>
            <a href="#program">Zobrazit cely harmonogram</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
