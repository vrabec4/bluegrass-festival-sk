import { ArrowUp } from 'lucide-react';
import { FeaturedArtistsSlider } from '@/components/featured-artists-slider';
import { HeroSlider } from '@/components/hero-slider';
import { SiteHeader } from '@/components/site-header';
import { SponsorsSlider } from '@/components/sponsors-slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { FestivalEdition } from '@/data/festivals';
import { createTranslator, defaultLocale } from '@/lib/i18n';

type FestivalPageProps = {
  edition: FestivalEdition;
  showYearNav?: boolean;
};

const t = createTranslator(defaultLocale);

export function FestivalPage({ edition, showYearNav = true }: FestivalPageProps) {
  return (
    <>
      <SiteHeader edition={edition} showYearNav={showYearNav} />

      <main>
        <HeroSlider edition={edition} />
        <FeaturedArtistsSlider bands={edition.lineup} />

        <section className="bg-[#fff6e8] py-16 text-[#222] md:py-20" id="program">
          <div className="mx-auto w-[min(1310px,92vw)]">
            <h2 className="text-3xl font-black uppercase tracking-[0.14em] text-[#0a2731] md:text-4xl">{t('festival.programTitle')}</h2>
            <p className="mt-3 inline-flex rounded-full border border-[#164859] bg-[#f3b026]/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.1em] text-[#164859]">
              {edition.voluntaryEntryLabel}
            </p>

            <Card className="mt-6 border-[#0a2731]/15 bg-white text-[#222] shadow-[0_20px_60px_rgba(10,39,49,0.12)]">
              <CardContent className="p-6 md:p-8">
                <ol className="space-y-3">
                  {edition.schedule.map((item) => (
                    <li key={`${item.time}-${item.label}`} className="flex items-start gap-3 border-b border-[#0a2731]/10 pb-3 last:border-b-0">
                      <span className="inline-flex min-w-16 rounded-md bg-[#164859] px-2 py-1 text-center text-sm font-bold text-white">
                        {item.time}
                      </span>
                      <span className="pt-0.5 text-base font-semibold">{item.label}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 md:py-20" id="mapy">
          <div className="mx-auto w-[min(1310px,92vw)]">
            <h2 className="text-3xl font-black uppercase tracking-[0.14em] text-[#f3b026] md:text-4xl">{t('festival.mapsTitle')}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t('festival.parkingMapTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid h-56 place-items-center rounded-xl border-2 border-dashed border-[#fcefdd]/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(0,179,231,0.15)_100%)] p-4 text-center text-[#fff6e8]/90">
                    {t('festival.parkingMapPlaceholder')}
                  </div>
                  <p className="text-sm text-[#fff6e8]/90">{t('festival.parkingHint')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t('festival.buffetMapTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid h-44 place-items-center rounded-xl border-2 border-dashed border-[#fcefdd]/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(0,179,231,0.15)_100%)] p-4 text-center text-[#fff6e8]/90">
                    {t('festival.buffetMapPlaceholder')}
                  </div>
                  <p className="text-sm text-[#fff6e8]/90">{t('festival.walkHint')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#fff6e8] py-16 text-[#222] md:py-20" id="faq">
          <div className="mx-auto w-[min(1310px,92vw)]">
            <h2 className="text-3xl font-black uppercase tracking-[0.14em] text-[#0a2731] md:text-4xl">{t('festival.faqTitle')}</h2>
            <Accordion type="single" collapsible className="mt-6 space-y-3">
              {edition.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="bg-white text-[#222]">
                  <AccordionTrigger className="text-[#0a2731] hover:text-[#164859]">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-[#222]/85">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <SponsorsSlider sponsors={edition.sponsors} />
      </main>

      <footer className="border-t border-white/20 bg-[#07111b] py-12" id="kontakt">
        <div className="mx-auto w-[min(1310px,92vw)]">
          <h2 className="text-3xl font-black uppercase tracking-[0.12em] text-[#f3b026] md:text-4xl">{t('festival.contactTitle')}</h2>
          <div className="mt-4 space-y-1 text-[#fff6e8]/95">
            <p>{t('festival.organizer')}</p>
            <p>{t('festival.contactLine')}</p>
          </div>
          <p className="mt-5 text-sm text-[#fff6e8]/80">
            © {edition.year} {edition.title}
          </p>
        </div>
      </footer>

      <a
        href="#top"
        aria-label={t('festival.backToTop')}
        className="fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full border border-[#f3b026]/70 bg-[#0a2731]/90 text-[#f3b026] shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:bg-[#164859]"
      >
        <ArrowUp className="size-5" />
      </a>
    </>
  );
}
