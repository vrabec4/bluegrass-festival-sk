import Link from 'next/link';
import { getArchiveEditions } from '@/lib/festival';

export const metadata = {
  title: 'Archiv rocnikov',
};

export default function ArchivePage() {
  const editions = getArchiveEditions();

  return (
    <main className="archive-page section">
      <div className="container">
        <h1>Archiv rocnikov</h1>
        <p className="section-intro">Tu budeme drzat jednotlive rocniky festivalu.</p>
        <div className="archive-grid">
          {editions.map((edition) => (
            <article key={edition.year} className="archive-card">
              <h2>{edition.year}</h2>
              <p>{edition.dateLabel}</p>
              <p>{edition.location}</p>
              <Link className="btn btn-small" href={`/${edition.year}`}>
                Otvorit rocnik
              </Link>
            </article>
          ))}
        </div>
        <p>
          <Link href="/">Spat na aktualny rocnik</Link>
        </p>
      </div>
    </main>
  );
}
