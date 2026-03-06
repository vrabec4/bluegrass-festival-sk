'use client';

import { useEffect, useMemo, useState } from 'react';
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
    <section className="featured_artists section" id="kapely">
      <div className="container">
        <h2>KAPELY</h2>
        <p className="section-intro">featured-artists-slider slick-initialized slick-slider</p>

        <div className="featured-artists-slider slick-initialized slick-slider">
          <button type="button" className="featured-arrow slick-prev" onClick={goPrev} aria-label="Predchadzajuca kapela" />

          <div className="slick-list">
            <div
              className="slick-track"
              style={{
                width: `${bands.length * slideWidth}%`,
                transform: `translate3d(${translateX}%, 0px, 0px)`,
              }}
            >
              {bands.map((band, index) => {
                const isCurrent = index === activeIndex;

                return (
                  <div
                    key={`${band.name}-${band.time}`}
                    className={`featured-artists-slider-item slick-slide ${
                      isCurrent ? 'slick-current slick-active slick-center' : ''
                    }`}
                    style={{ width: `${slideWidth}%` }}
                  >
                    <a href="#program" title={band.name}>
                      <div className="featured-artists-slider-item-image">
                        <img src={band.imageUrl} alt={band.name} loading="lazy" />
                      </div>
                      <div className="featured-artists-slider-item-content">
                        <h3 className="title">{band.name}</h3>
                        <div className="date">{band.time}</div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <button type="button" className="featured-arrow slick-next" onClick={goNext} aria-label="Dalsia kapela" />
        </div>

        <div className="featured-artists-slider-item-button-group">
          <div className="buttons-group">
            <a href="#program" className="btn">
              Zobrazit cely harmonogram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
