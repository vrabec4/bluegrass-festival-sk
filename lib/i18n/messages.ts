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
      countdownTo: 'Do festivalu zostáva už len',
      openMenu: 'Otvoriť menu',
      mobileNav: 'Mobilná navigácia',
      mainNav: 'Hlavná navigácia',
      programToday: 'Program dňa',
      harmony: 'Harmonogram',
      parking: 'Parkovanie',
      practicalInfo: 'Praktické info',
      nav: {
        about: 'O festivale',
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
      aboutTitle: 'O festivale',
      aboutLead:
        'Festival Bluegrass na dobrom mieste organizujeme po prvýkrát a dávame doň srdce, energiu aj úprimné nadšenie.',
      aboutBodyOne:
        'Naším cieľom je vytvoriť príjemný jednodňový festival, ktorý prinesie nielen kvalitnú bluegrass hudbu, ale aj pohodovú atmosféru, stretnutia s ľuďmi a pekný kultúrny zážitok pre všetkých návštevníkov.',
      aboutBodyTwo:
        'Chceme zároveň podporiť a spropagovať bluegrassovú muziku, ktorá má svoje čaro, silu aj jedinečnú energiu. Veríme, že si táto hudba zaslúži viac priestoru, viac poslucháčov a miesto, kde môže znieť naplno a naživo. Aj preto sme sa rozhodli pripraviť festival, ktorý spojí fanúšikov tohto žánru, hudobníkov aj všetkých, ktorí radi objavujú poctivú hudbu hranú od srdca.',
      aboutBodyThree:
        'Našou snahou je dopriať ľuďom príjemný kultúrny program aj v nedeľu — deň, ktorý sa často nesie v pokojnejšom duchu a ponúka priestor na oddych, stretnutia a dobrú hudbu. Chceme, aby si k nám návštevníci prišli užiť deň plný hudby, pohody a priateľskej atmosféry na dobrom mieste.',
      aboutBodyFour:
        'Keďže ide o premiérový ročník, budeme sa snažiť urobiť maximum pre to, aby ste si odniesli skvelý zážitok, dobrú náladu a chuť prísť aj nabudúce. Veríme, že práve tento prvý ročník položí základ krásnej tradícii a festivalu, na ktorý sa budeme všetci radi vracať.',
      programTitle: 'Program',
      programSound: 'Zvuk: Peter Szabados',
      programModerator: 'Moderátor: Nikol Liptáková',
      mapsTitle: 'Mapy a orientácia',
      liveMapTitle: 'Interaktívna mapa festivalu',
      liveMapHint: 'Mapa je zameraná na Bufet na dobrom mieste, s odkazmi pre auto aj pešo.',
      openDrivingMapLink: 'Otvoriť trasu autom',
      openWalkingMapLink: 'Otvoriť trasu pešo',
      walkGuideTitle: 'Ako sa dostať pešo na festival',
      walkSteps: [
        'Zaparkuj na odporúčanom parkovisku v okolí a odtiaľ sa vyber pešo za festivalovou atmosférou.',
        'Stačí ísť po hlavnej ceste smerom k areálu.',
        'Pri hlavnom vstupe sa drž festivalového značenia a potom už len pokračuj rovno.',
        'Dovedie ťa až k Bufetu na dobrom mieste, kde štartuje celý program.',
      ],
      openMapLink: 'Otvoriť mapu na celú obrazovku',
      faqTitle: 'FAQ',
      contactTitle: 'Kontakt',
      organizer: 'Organizátor: 4Bluegrass',
      contactEmailLabel: 'E-mail',
      contactEmail: 'bgfestba@gmail.com',
      contactPhoneLabel: 'Telefón',
      contactPhone: '+421 950 585 373',
      siteCredit: 'Created by Hardcode Solutions s.r.o.',
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
