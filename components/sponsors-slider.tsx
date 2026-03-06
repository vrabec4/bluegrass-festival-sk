'use client';

import { useEffect, useMemo, useState } from 'react';
import type { SponsorLogo } from '@/data/festivals';

type SponsorsSliderProps = {
  sponsors: SponsorLogo[];
};

function getSlidesToShow(width: number): number {
  if (width <= 640) return 2;
  if (width <= 840) return 3;
  if (width <= 1024) return 4;
  if (width <= 1280) return 5;
  return 7;
}

export function SponsorsSlider({ sponsors }: SponsorsSliderProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(7);

  useEffect(() => {
    const onResize = () => {
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (sponsors.length <= slidesToShow) {
      return;
    }

    const timerId = setInterval(() => {
      setStartIndex((current) => (current + 1) % sponsors.length);
    }, 4500);

    return () => clearInterval(timerId);
  }, [sponsors.length, slidesToShow]);

  const visibleSponsors = useMemo(() => {
    if (sponsors.length <= slidesToShow) {
      return sponsors;
    }

    const list: SponsorLogo[] = [];
    for (let i = 0; i < slidesToShow; i += 1) {
      list.push(sponsors[(startIndex + i) % sponsors.length]);
    }
    return list;
  }, [sponsors, slidesToShow, startIndex]);

  function goPrev() {
    setStartIndex((current) => (current === 0 ? sponsors.length - 1 : current - 1));
  }

  function goNext() {
    setStartIndex((current) => (current + 1) % sponsors.length);
  }

  return (
    <div className="multi-sections-blocks-inner-item-sponsor-logos" id="sponzori">
      <div className="head">
        <h2>THANK YOU SPONSORS</h2>
      </div>
      <div className="multi-sections-blocks-inner-item-sponsor-logos-list">
        <div className="our_sponsors_slider">
          <button type="button" className="sponsor-arrow slick-prev" onClick={goPrev} aria-label="Predchadzajuci sponsor" />
          <div className="our_sponsors_track">
            {visibleSponsors.map((sponsor) => (
              <div key={sponsor.name} className="multi-sections-blocks-inner-item-sponsor-logos-list-item">
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
