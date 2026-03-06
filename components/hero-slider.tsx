'use client';

import { useEffect, useState } from 'react';
import type { FestivalEdition } from '@/data/festivals';

type HeroSliderProps = {
  edition: FestivalEdition;
};

export function HeroSlider({ edition }: HeroSliderProps) {
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
    <section className="main-hero-banner" id="main-hero-banner">
      <div className="main-hero-banner-inner">
        <div className="banner-slider auto-rotation">
          {slides.map((slide, index) => (
            <div
              key={`${slide.heading}-${slide.imageUrl}`}
              className={`banner-slider-item is-overlay ${index === activeIndex ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="banner-slider-item-logo">
                <div className="hero-logo-text">{edition.title}</div>
              </div>

              <div className="banner-slider-item-content">
                <h2 className="h1 smaller-heading">{slide.heading}</h2>
              </div>

              <div className="banner-slider-item-button-group">
                <div className="buttons-group">
                  {slide.actions.map((action) => (
                    <a key={action.href + action.label} href={action.href} className="btn btn-outline">
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button type="button" className="banner-arrow slick-prev" onClick={goPrev} aria-label="Predchadzajuci slide" />
        <button type="button" className="banner-arrow slick-next" onClick={goNext} aria-label="Dalsi slide" />

        <ul className="slick-dots" aria-label="Vyber slide">
          {slides.map((slide, index) => (
            <li key={`dot-${slide.heading}`} className={index === activeIndex ? 'slick-active' : ''}>
              <button type="button" onClick={() => goTo(index)} aria-label={`Slide ${index + 1}`} />
            </li>
          ))}
        </ul>

        <div className="banner-slider-bottom-strip">
          <h4>
            <span>{edition.dateLabel}</span>
            <span className="bull-mark" aria-hidden>
              BG
            </span>
            <span>{edition.location}</span>
          </h4>
        </div>
      </div>
    </section>
  );
}
