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

export type HeroAction = {
  label: string;
  href: string;
};

export type HeroSlide = {
  imageUrl: string;
  heading: string;
  actions: HeroAction[];
};

export type SponsorLogo = {
  name: string;
  url: string;
  creamLogoUrl: string;
  goldLogoUrl: string;
};

export type FestivalEdition = {
  year: number;
  title: string;
  dateLabel: string;
  countdownStartsAtIso: string;
  startsAtIso: string;
  location: string;
  voluntaryEntryLabel: string;
  heroSlides: HeroSlide[];
  sponsors: SponsorLogo[];
  lineup: Band[];
  schedule: ScheduleItem[];
  faqs: FaqItem[];
};

export const festivalEditions: FestivalEdition[] = [
  {
    year: 2026,
    title: 'Bluegrass na dobrom mieste',
    dateLabel: '5.9.2026',
    countdownStartsAtIso: '2025-09-05T00:00:00+02:00',
    startsAtIso: '2026-09-05T14:00:00+02:00',
    location: 'Bufet na dobrom mieste',
    voluntaryEntryLabel: 'Vstupne dobrovolne',
    heroSlides: [
      {
        imageUrl: 'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/10/RDP3230.jpg',
        heading: 'BLUEGRASS NA DOBROM MIESTE',
        actions: [
          { label: 'Program dna', href: '#program' },
          { label: 'Mapa parkovania', href: '#mapy' },
        ],
      },
      {
        imageUrl: 'https://www.blueoxmusicfestival.com/wp-content/uploads/2026/01/Aerial_Banner.jpg',
        heading: 'JEDEN DEN, 5 KAPIEL',
        actions: [{ label: 'Pozriet lineup', href: '#kapely' }],
      },
      {
        imageUrl: 'https://www.blueoxmusicfestival.com/wp-content/uploads/2026/02/Art-in-the-Pines.jpg',
        heading: 'VSTUPNE JE DOBROVOLNE',
        actions: [{ label: 'Prakticke info', href: '#faq' }],
      },
    ],
    sponsors: [
      {
        name: 'Fieldnotes by Lacrosse Distilling',
        url: 'https://lacrossedistilling.co/fieldnotes-organic-gin/',
        creamLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/2023-Sponsorship-Logos-FieldsNotes.webp',
        goldLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/2023-Sponsorship-Logos-FieldsNotes.png',
      },
      {
        name: 'Climbing Kites',
        url: 'https://climbingkites.com/',
        creamLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/2025-Sponsorship-Logos-Web-ClimbingKites.webp',
        goldLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/2025-Sponsorship-Logos-Web-ClimbingKites.png',
      },
      {
        name: 'Nicolet National Bank',
        url: 'https://www.nicoletbank.com/',
        creamLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/2023-Sponsorship-Logos-Web-NicoletBank.webp',
        goldLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/2023-Sponsorship-Logos-Web-NicoletBank.png',
      },
      {
        name: 'Lee Beverage of Wisconsin',
        url: 'https://www.leebeverage.com/',
        creamLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/2024-Sponsorship-LeeBev-Web.webp',
        goldLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/2024-Sponsorship-LeeBev-Web.png',
      },
      {
        name: 'Bauer Built',
        url: 'https://www.bauerbuilt.com/',
        creamLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2026/02/2026-Sponsorship-Logos-Web-BauerBuilt-Cream.png',
        goldLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2026/02/2026-Sponsorship-Logos-Web-BauerBuilt-Gold.png',
      },
      {
        name: 'The Current',
        url: 'https://www.thecurrent.org/',
        creamLogoUrl: 'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/TheCurrent-cream.webp',
        goldLogoUrl: 'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/TheCurrent-USE.png',
      },
      {
        name: 'Wisconsin Public Radio',
        url: 'https://www.wpr.org/',
        creamLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/2025-Sponsorship-Logos-Web-WPR.webp',
        goldLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/2025-Sponsorship-Logos-Web-WPR.png',
      },
      {
        name: 'Waste Management',
        url: 'https://www.wm.com/us/en/location/wi',
        creamLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/2019-Sponsorship-Logos-Web-WasteManagement-cream.webp',
        goldLogoUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/07/2019-Sponsorship-Logos-Web-WasteManagement.webp',
      },
    ],
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
