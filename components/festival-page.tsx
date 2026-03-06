import { HeroSlider } from '@/components/hero-slider';
import { FeaturedArtistsSlider } from '@/components/featured-artists-slider';
import { SiteHeader } from '@/components/site-header';
import { SponsorsSlider } from '@/components/sponsors-slider';
import type { FestivalEdition } from '@/data/festivals';

type FestivalPageProps = {
  edition: FestivalEdition;
  showYearNav?: boolean;
};

export function FestivalPage({ edition, showYearNav = true }: FestivalPageProps) {
  return (
    <>
      <SiteHeader edition={edition} showYearNav={showYearNav} />

      <main>
        <HeroSlider edition={edition} />
        <FeaturedArtistsSlider bands={edition.lineup} />

        <section className="section section-alt" id="program">
          <div className="container">
            <h2>Program dna</h2>
            <p className="badge">{edition.voluntaryEntryLabel}</p>
            <ol className="timeline">
              {edition.schedule.map((item) => (
                <li key={`${item.time}-${item.label}`}>
                  <span>{item.time}</span> {item.label}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="mapy">
          <div className="container">
            <h2>Mapy a orientacia</h2>
            <div className="map-grid">
              <article className="map-card">
                <h3>Mapa parkovania aut</h3>
                <div className="map-placeholder">Velka mapa parkovacich zon (placeholder)</div>
                <p>Prichod/odchod a smerove sipky: placeholder.</p>
              </article>
              <article className="map-card">
                <h3>Mala mapa k Bufetu na dobrom mieste</h3>
                <div className="map-placeholder map-placeholder-small">Mini mapa peso (placeholder)</div>
                <p>Orientacny cas peso: placeholder.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="faq">
          <div className="container">
            <h2>FAQ</h2>
            <div className="faq-list">
              {edition.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <SponsorsSlider sponsors={edition.sponsors} />
      </main>

      <footer className="footer" id="kontakt">
        <div className="container">
          <h2>Kontakt</h2>
          <p>Organizator: placeholder</p>
          <p>E-mail: placeholder@example.com | Telefon: +421 xxx xxx xxx</p>
          <p className="meta">© {edition.year} {edition.title}</p>
        </div>
      </footer>
    </>
  );
}
