export type BandStatus = 'confirmed' | 'pending';

export type Band = {
  name: string;
  status: BandStatus;
  time: string;
  description: string;
};

export type ScheduleItem = {
  time: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FestivalEdition = {
  year: number;
  title: string;
  dateLabel: string;
  startsAtIso: string;
  location: string;
  voluntaryEntryLabel: string;
  lineup: Band[];
  schedule: ScheduleItem[];
  faqs: FaqItem[];
};

export const festivalEditions: FestivalEdition[] = [
  {
    year: 2026,
    title: 'Bluegrass na dobrom mieste',
    dateLabel: '5.9.2026',
    startsAtIso: '2026-09-05T14:00:00+02:00',
    location: 'Bufet na dobrom mieste',
    voluntaryEntryLabel: 'Vstupne dobrovolne',
    lineup: [
      {
        name: 'Grass Device',
        status: 'confirmed',
        time: '15:00',
        description: 'Potvrdena kapela. Placeholder text.',
      },
      {
        name: 'Kapela #2',
        status: 'pending',
        time: '16:00',
        description: 'Rokovanie prebieha. Placeholder text.',
      },
      {
        name: 'Kapela #3',
        status: 'pending',
        time: '17:00',
        description: 'Rokovanie prebieha. Placeholder text.',
      },
      {
        name: 'Kapela #4',
        status: 'pending',
        time: '18:30',
        description: 'Rokovanie prebieha. Placeholder text.',
      },
      {
        name: 'Kapela #5',
        status: 'pending',
        time: '20:00',
        description: 'Rokovanie prebieha. Placeholder text.',
      },
    ],
    schedule: [
      { time: '14:00', label: 'Otvorenie arealu' },
      { time: '15:00', label: 'Grass Device' },
      { time: '16:00', label: 'Kapela #2' },
      { time: '17:00', label: 'Kapela #3' },
      { time: '18:00', label: 'Prestavka' },
      { time: '18:30', label: 'Kapela #4' },
      { time: '20:00', label: 'Kapela #5' },
      { time: '21:30', label: 'Koniec programu' },
    ],
    faqs: [
      {
        question: 'Kedy sa otvara areal?',
        answer: 'Areal sa otvara o 14:00. Placeholder odpoved.',
      },
      {
        question: 'Da sa platit kartou alebo hotovostou?',
        answer: 'Platba je placeholder, finalna informacia bude doplnena.',
      },
      {
        question: 'Kde presne zaparkovat?',
        answer: 'Pozri sekciu Mapy a orientacia. Placeholder odpoved.',
      },
    ],
  },
];

export const currentFestivalYear = 2026;
