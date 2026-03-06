import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FestivalPage } from '@/components/festival-page';
import { festivalEditions } from '@/data/festivals';
import { getEditionByYear } from '@/lib/festival';
import { createTranslator, defaultLocale } from '@/lib/i18n';

type YearPageProps = {
  params: Promise<{ year: string }>;
};

export const dynamicParams = false;
const t = createTranslator(defaultLocale);

export async function generateStaticParams() {
  return festivalEditions.map((edition) => ({ year: String(edition.year) }));
}

export async function generateMetadata({ params }: YearPageProps): Promise<Metadata> {
  const { year } = await params;
  const edition = getEditionByYear(Number(year));

  if (!edition) {
    return { title: t('metadata.archiveMissingTitle') };
  }

  return {
    title: `${edition.title} ${edition.year}`,
    description: `${edition.dateLabel} | ${edition.location}`,
  };
}

export default async function YearPage({ params }: YearPageProps) {
  const { year } = await params;
  const edition = getEditionByYear(Number(year));

  if (!edition) {
    notFound();
  }

  return <FestivalPage edition={edition} showYearNav={false} />;
}
