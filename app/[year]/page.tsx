import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FestivalPage } from '@/components/festival-page';
import { festivalEditions } from '@/data/festivals';
import { getEditionByYear } from '@/lib/festival';

type YearPageProps = {
  params: Promise<{ year: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return festivalEditions.map((edition) => ({ year: String(edition.year) }));
}

export async function generateMetadata({ params }: YearPageProps): Promise<Metadata> {
  const { year } = await params;
  const edition = getEditionByYear(Number(year));

  if (!edition) {
    return { title: 'Rocnik nenajdeny' };
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
