export type BandStatus = 'confirmed' | 'pending';

export type Band = {
  name: string;
  status: BandStatus;
  time: string;
  description: string;
  imageUrl: string;
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
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
  heading: string;
  actions: HeroAction[];
};

export type SponsorLogo = {
  name: string;
  url: string;
  creamLogoUrl: string;
  goldLogoUrl: string;
};

function localSponsorLogos(slug: string): Pick<SponsorLogo, 'creamLogoUrl' | 'goldLogoUrl'> {
  return {
    creamLogoUrl: `/images/sponsors/generated/${slug}-cream.svg`,
    goldLogoUrl: `/images/sponsors/generated/${slug}-gold.svg`,
  };
}

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
    voluntaryEntryLabel: 'Vstupné dobrovoľné',
    heroSlides: [
      {
        imageUrl: '/images/logo.jpeg',
        imageFit: 'contain',
        imagePosition: 'center',
        heading: 'BLUEGRASS NA DOBROM MIESTE',
        actions: [
          { label: 'Program dňa', href: '#program' },
          { label: 'Mapa parkovania', href: '#mapy' },
        ],
      },
      {
        imageUrl: '/images/BNDM.jpeg',
        imageFit: 'contain',
        imagePosition: 'center',
        heading: 'JEDEN DEŇ, 5 KAPIEL',
        actions: [{ label: 'Pozrieť lineup', href: '#kapely' }],
      },
      {
        imageUrl: 'https://www.blueoxmusicfestival.com/wp-content/uploads/2026/02/Art-in-the-Pines.jpg',
        heading: 'VSTUPNÉ JE DOBROVOĽNÉ',
        actions: [{ label: 'Praktické info', href: '#faq' }],
      },
    ],
    sponsors: [
      {
        name: 'Konako s.r.o',
        url: '#',
        ...localSponsorLogos('konako'),
      },
      {
        name: 'Coall',
        url: '#',
        ...localSponsorLogos('coall'),
      },
      {
        name: 'Country Club Sheriff Tovarníky',
        url: '#',
        ...localSponsorLogos('sheriff-tovarniky'),
      },
      {
        name: 'Hardcode solutions',
        url: '#',
        ...localSponsorLogos('hardcode-solutions'),
      },
      {
        name: 'NexusRTM',
        url: '#',
        ...localSponsorLogos('nexusrtm'),
      },
      {
        name: 'Bufet na dobrom mieste',
        url: '#',
        ...localSponsorLogos('bufet-na-dobrom-mieste'),
      },
    ],
    lineup: [
      {
        name: 'Grass Device',
        status: 'confirmed',
        time: '15:00',
        description: 'Potvrdená kapela. Placeholder text.',
        imageUrl: '/images/grass-device.webp',
      },
      {
        name: 'Union Citygrass',
        status: 'pending',
        time: '16:00',
        description: 'Rokovanie prebieha. Placeholder text.',
        imageUrl: '/images/sponsors/UCG.png',
      },
      {
        name: 'Kapela #3',
        status: 'pending',
        time: '17:00',
        description: 'Rokovanie prebieha. Placeholder text.',
        imageUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/11/MarcusKingBand.jpg',
      },
      {
        name: 'Kapela #4',
        status: 'pending',
        time: '18:30',
        description: 'Rokovanie prebieha. Placeholder text.',
        imageUrl:
          'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/11/ImWithHer-2.jpg',
      },
      {
        name: 'Kapela #5',
        status: 'pending',
        time: '20:00',
        description: 'Rokovanie prebieha. Placeholder text.',
        imageUrl: 'https://www.blueoxmusicfestival.com/wp-content/uploads/2025/10/Shadowgrass.jpg',
      },
    ],
    schedule: [
      { time: '14:00', label: 'Otvorenie areálu' },
      { time: '15:00', label: 'Grass Device' },
      { time: '16:00', label: 'Union Citygrass' },
      { time: '17:00', label: 'Kapela #3' },
      { time: '18:00', label: 'Prestavka' },
      { time: '18:30', label: 'Kapela #4' },
      { time: '20:00', label: 'Kapela #5' },
      { time: '21:30', label: 'Koniec programu' },
    ],
    faqs: [
      {
        question: 'Kedy sa otvára areál?',
        answer: 'Areál sa otvára o 14:00. Placeholder odpoveď.',
      },
      {
        question: 'Dá sa platiť kartou alebo hotovosťou?',
        answer: 'Platba je placeholder, finálna informácia bude doplnená.',
      },
      {
        question: 'Kde presne zaparkovať?',
        answer: 'Pozri sekciu Mapy a orientácia. Placeholder odpoveď.',
      },
    ],
  },
];

export const currentFestivalYear = 2026;
