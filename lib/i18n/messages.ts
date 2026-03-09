export const locales = ['sk'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'sk';

export const messages = {
  sk: {
    metadata: {
      siteTitle: 'Bluegrass na dobrom mieste',
      siteDescription: 'Jednodňový bluegrass festival na Slovensku. 5 kapiel, jeden deň, vstupné dobrovoľné.',
      archiveTitle: 'Archív ročníkov',
      archiveMissingTitle: 'Ročník nenájdený',
    },
    header: {
      countdownTo: 'ODPOČET DO {title} {year}',
      openMenu: 'Otvoriť menu',
      mobileNav: 'Mobilná navigácia',
      mainNav: 'Hlavná navigácia',
      programToday: 'Program dňa',
      harmony: 'Harmonogram',
      parking: 'Parkovanie',
      practicalInfo: 'Praktické info',
      nav: {
        bands: 'Kapely',
        program: 'Program',
        maps: 'Mapy',
        faq: 'FAQ',
        contact: 'Kontakt',
        archive: 'Archív',
      },
    },
    hero: {
      previousSlide: 'Predchádzajúci slide',
      nextSlide: 'Ďalší slide',
      selectSlide: 'Výber slide',
      slideLabel: 'Slide {index}',
    },
    featured: {
      title: 'Kapely',
      sliderLabel: 'Výber kapiel',
      previousBand: 'Predchádzajúca kapela',
      nextBand: 'Ďalšia kapela',
      fullSchedule: 'Zobraziť celý harmonogram',
    },
    festival: {
      programTitle: 'Program dňa',
      mapsTitle: 'Mapy a orientácia',
      liveMapTitle: 'Interaktívna mapa festivalu',
      liveMapHint: 'Mapa je zameraná na Bufet na dobrom mieste, s odkazmi pre auto aj pešo.',
      openDrivingMapLink: 'Otvoriť trasu autom',
      openWalkingMapLink: 'Otvoriť trasu pešo',
      parkingMapTitle: 'Mapa parkovania áut',
      parkingMapPlaceholder: 'Interaktívna mapa parkovania',
      parkingHint: 'Použi mapu pre orientáciu pri príchode autom.',
      buffetMapTitle: 'Malá mapa k Bufetu na dobrom mieste',
      buffetMapPlaceholder: 'Interaktívna mapa pešo',
      walkHint: 'Detail miesta festivalu s presnou polohou Bufetu na dobrom mieste.',
      openMapLink: 'Otvoriť mapu na celú obrazovku',
      faqTitle: 'FAQ',
      contactTitle: 'Kontakt',
      organizer: 'Organizátor: placeholder',
      contactLine: 'E-mail: placeholder@example.com | Telefón: +421 xxx xxx xxx',
      backToTop: 'Späť hore',
    },
    sponsors: {
      title: 'Ďakujeme sponzorom',
      previousSponsor: 'Predchádzajúci sponzor',
      nextSponsor: 'Ďalší sponzor',
    },
    archive: {
      title: 'Archív ročníkov',
      intro: 'Tu budeme držať jednotlivé ročníky festivalu.',
      openEdition: 'Otvoriť ročník',
      backToCurrent: 'Späť na aktuálny ročník',
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];

export function getMessages(locale: Locale = defaultLocale): Messages {
  return messages[locale];
}
