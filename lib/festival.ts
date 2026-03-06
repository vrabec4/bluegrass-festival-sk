import { currentFestivalYear, festivalEditions, type FestivalEdition } from '@/data/festivals';

export function getCurrentEdition(): FestivalEdition {
  const current = festivalEditions.find((edition) => edition.year === currentFestivalYear);
  if (!current) {
    throw new Error(`Missing current festival year: ${currentFestivalYear}`);
  }
  return current;
}

export function getEditionByYear(year: number): FestivalEdition | undefined {
  return festivalEditions.find((edition) => edition.year === year);
}

export function getArchiveEditions(): FestivalEdition[] {
  return [...festivalEditions].sort((a, b) => b.year - a.year);
}
