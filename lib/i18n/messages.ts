export const locales = ['sk'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'sk';

export const messages = {
  sk: {
    metadata: {
      siteTitle: 'Bluegrass na dobrom mieste',
      siteDescription: 'Jednodnovy bluegrass festival na Slovensku. 5 kapiel, jeden den, vstupne dobrovolne.',
      archiveTitle: 'Archiv rocnikov',
      archiveMissingTitle: 'Rocnik nenajdeny',
    },
    header: {
      countdownTo: 'ODPOCET DO {title} {year}',
      openMenu: 'Otvorit menu',
      mobileNav: 'Mobilna navigacia',
      mainNav: 'Hlavna navigacia',
      programToday: 'Program dna',
      harmony: 'Harmonogram',
      parking: 'Parkovanie',
      practicalInfo: 'Prakticke info',
      nav: {
        bands: 'Kapely',
        program: 'Program',
        maps: 'Mapy',
        faq: 'FAQ',
        contact: 'Kontakt',
        archive: 'Archiv',
      },
    },
    hero: {
      previousSlide: 'Predchadzajuci slide',
      nextSlide: 'Dalsi slide',
      selectSlide: 'Vyber slide',
      slideLabel: 'Slide {index}',
    },
    featured: {
      title: 'Kapely',
      sliderLabel: 'Vyber kapiel',
      previousBand: 'Predchadzajuca kapela',
      nextBand: 'Dalsia kapela',
      fullSchedule: 'Zobrazit cely harmonogram',
    },
    festival: {
      programTitle: 'Program dna',
      mapsTitle: 'Mapy a orientacia',
      parkingMapTitle: 'Mapa parkovania aut',
      parkingMapPlaceholder: 'Velka mapa parkovacich zon (placeholder)',
      parkingHint: 'Prichod/odchod a smerove sipky: placeholder.',
      buffetMapTitle: 'Mala mapa k Bufetu na dobrom mieste',
      buffetMapPlaceholder: 'Mini mapa peso (placeholder)',
      walkHint: 'Orientacny cas peso: placeholder.',
      faqTitle: 'FAQ',
      contactTitle: 'Kontakt',
      organizer: 'Organizator: placeholder',
      contactLine: 'E-mail: placeholder@example.com | Telefon: +421 xxx xxx xxx',
      backToTop: 'Spat hore',
    },
    sponsors: {
      title: 'Dakujeme sponzorom',
      previousSponsor: 'Predchadzajuci sponsor',
      nextSponsor: 'Dalsi sponsor',
    },
    archive: {
      title: 'Archiv rocnikov',
      intro: 'Tu budeme drzat jednotlive rocniky festivalu.',
      openEdition: 'Otvorit rocnik',
      backToCurrent: 'Spat na aktualny rocnik',
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];

export function getMessages(locale: Locale = defaultLocale): Messages {
  return messages[locale];
}
