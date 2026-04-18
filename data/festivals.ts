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
        actions: [{ label: 'Mapa parkovania', href: '#mapy' }],
      },
      {
        imageUrl: '/images/BNDM.jpeg',
        imageFit: 'cover',
        imagePosition: 'center 72%',
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
        name: 'Slovenský skauting',
        url: 'https://skauting.sk/',
        ...localSponsorLogos('skauting-v2'),
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
        name: 'Bg Time',
        status: 'confirmed',
        time: '14:00',
        description: 'Potvrdená kapela. Placeholder text.',
        imageUrl: '/images/bg-time.jpg',
      },
      {
        name: 'Poa Pratensis',
        status: 'confirmed',
        time: '15:10',
        description: 'Potvrdená kapela. Placeholder text.',
        imageUrl: '/images/poa-pratensis.jpg',
      },
      {
        name: 'Grass Device',
        status: 'confirmed',
        time: '16:20',
        description: 'Potvrdená kapela. Placeholder text.',
        imageUrl: '/images/grass-device.jpg',
      },
      {
        name: 'Union Citygrass',
        status: 'confirmed',
        time: '17:30',
        description: 'Potvrdená kapela. Placeholder text.',
        imageUrl: '/images/sponsors/UCG.png',
      },
      {
        name: 'Monogram',
        status: 'confirmed',
        time: '18:40',
        description: 'Potvrdená kapela. Placeholder text.',
        imageUrl: '/images/monogram.jpg',
      },
    ],
    schedule: [
      { time: '14:00', label: 'Bg Time' },
      { time: '15:10', label: 'Poa Pratensis' },
      { time: '16:20', label: 'Grass Device' },
      { time: '17:30', label: 'Union Citygrass' },
      { time: '18:40', label: 'Monogram' },
      { time: '20:00', label: 'Voľná Jam Session pri dobrom pive' },
      { time: '22:00', label: 'Koniec programu' },
    ],
    faqs: [
      {
        question: 'Kedy sa otvára areál?',
        answer: 'Areál je otvorený nonstop. Prvá kapela začína o 14:00.',
      },
      {
        question: 'Dá sa platiť kartou alebo hotovosťou?',
        answer: 'Áno, platba je možná hotovosťou aj kartou.',
      },
      {
        question: 'Kde presne zaparkovať?',
        answer: 'Pre kapely je parkovanie zabezpečené. Ostatní návštevníci môžu parkovať podľa miesta na okolitých parkoviskách.',
      },
    ],
  },
];

export const currentFestivalYear = 2026;
