import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getArchiveEditions } from '@/lib/festival';
import { createTranslator, defaultLocale } from '@/lib/i18n';

const t = createTranslator(defaultLocale);

export const metadata = {
  title: t('metadata.archiveTitle'),
};

export default function ArchivePage() {
  const editions = getArchiveEditions();

  return (
    <main className="py-16">
      <div className="mx-auto w-[min(1310px,92vw)]">
        <h1 className="text-4xl font-black uppercase tracking-[0.14em] text-[#f3b026]">{t('archive.title')}</h1>
        <p className="mt-2 text-[#fff6e8]/80">{t('archive.intro')}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {editions.map((edition) => (
            <Card key={edition.year}>
              <CardHeader className="pb-3">
                <CardTitle>{edition.year}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-[#fff6e8]/90">
                <p>{edition.dateLabel}</p>
                <p>{edition.location}</p>
                <Button asChild size="sm" className="mt-2">
                  <Link href={`/${edition.year}`}>{t('archive.openEdition')}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/">{t('archive.backToCurrent')}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
