import Link from 'next/link';
import { Countdown } from '@/components/countdown';
import type { FestivalEdition } from '@/data/festivals';

type FestivalPageProps = {
  edition: FestivalEdition;
  showYearNav?: boolean;
};

export function FestivalPage({ edition, showYearNav = true }: FestivalPageProps) {
  return (
    <>
      <header className="header" id="domov">
        <div className="container nav-wrap">
          <a className="logo" href="#domov">
            {edition.title}
          </a>
          <nav className="nav">
            <a href="#kapely">Kapely</a>
            <a href="#program">Program</a>
            <a href="#mapy">Mapy</a>
            <a href="#faq">FAQ</a>
            <a href="#kontakt">Kontakt</a>
            {showYearNav ? <Link href="/archiv">Archiv</Link> : null}
          </nav>
          <a className="btn btn-small" href="#program">
            Program dna
          </a>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-inner">
            <p className="eyebrow">{edition.title}</p>
            <h1>{edition.title}</h1>
            <p className="hero-meta">
              {edition.dateLabel} | {edition.location}
            </p>
            <p className="badge">{edition.voluntaryEntryLabel}</p>
            <Countdown targetIso={edition.startsAtIso} />
            <div className="hero-cta">
              <a className="btn" href="#kapely">
                Pozriet lineup
              </a>
              <a className="btn btn-ghost" href="#mapy">
                Ako sa sem dostat
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="kapely">
          <div className="container">
            <h2>Kapely</h2>
            <p className="section-intro">Potvrdene vystupenia na jeden den.</p>
            <div className="cards">
              {edition.lineup.map((band) => (
                <article
                  key={band.name}
                  className={band.status === 'confirmed' ? 'card card-confirmed' : 'card'}
                >
                  <p className={band.status === 'confirmed' ? 'status' : 'status status-pending'}>
                    {band.status === 'confirmed' ? 'Potvrdene' : 'Rokovanie'}
                  </p>
                  <h3>{band.name}</h3>
                  <p>{band.description}</p>
                  <p className="time">Cas: {band.time}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="program">
          <div className="container">
            <h2>Program dna</h2>
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
