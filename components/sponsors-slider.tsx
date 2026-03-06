'use client';

import { useEffect, useMemo, useState } from 'react';
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
    <div className="multi-sections-blocks-inner-item-sponsor-logos" id="sponzori">
      <div className="head">
        <h2>THANK YOU SPONSORS</h2>
      </div>
      <div className="multi-sections-blocks-inner-item-sponsor-logos-list">
        <div className="our_sponsors_slider slick-initialized slick-slider">
          <button type="button" className="sponsor-arrow slick-prev" onClick={goPrev} aria-label="Predchadzajuci sponsor" />
          <div
            className="our_sponsors_track"
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {visibleSponsors.map((sponsor) => (
              <div
                key={`${sponsor.name}-${sponsor.creamLogoUrl}`}
                className="multi-sections-blocks-inner-item-sponsor-logos-list-item"
              >
                <a href={sponsor.url} target="_blank" rel="noreferrer">
                  <img className="sponsor-cream-logo" src={sponsor.creamLogoUrl} alt={sponsor.name} />
                  <img className="sponsor-gold-logo" src={sponsor.goldLogoUrl} alt={sponsor.name} />
                </a>
              </div>
            ))}
          </div>
          <button type="button" className="sponsor-arrow slick-next" onClick={goNext} aria-label="Dalsi sponsor" />
        </div>
      </div>
    </div>
  );
}
