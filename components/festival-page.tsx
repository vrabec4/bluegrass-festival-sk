import { FeaturedArtistsSlider } from '@/components/featured-artists-slider';
import { HeroSlider } from '@/components/hero-slider';
import { SiteHeader } from '@/components/site-header';
import { SponsorsSlider } from '@/components/sponsors-slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { FestivalEdition } from '@/data/festivals';

type FestivalPageProps = {
  edition: FestivalEdition;
  showYearNav?: boolean;
};

export function FestivalPage({ edition, showYearNav = true }: FestivalPageProps) {
  return (
    <>
      <SiteHeader edition={edition} showYearNav={showYearNav} />

      <main>
        <HeroSlider edition={edition} />
        <FeaturedArtistsSlider bands={edition.lineup} />

        <section className="bg-[#fff6e8] py-16 text-[#222] md:py-20" id="program">
          <div className="mx-auto w-[min(1310px,92vw)]">
            <h2 className="text-3xl font-black uppercase tracking-[0.14em] text-[#0a2731] md:text-4xl">Program dna</h2>
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
            <h2 className="text-3xl font-black uppercase tracking-[0.14em] text-[#f3b026] md:text-4xl">Mapy a orientacia</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Mapa parkovania aut</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid h-56 place-items-center rounded-xl border-2 border-dashed border-[#fcefdd]/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(0,179,231,0.15)_100%)] p-4 text-center text-[#fff6e8]/90">
                    Velka mapa parkovacich zon (placeholder)
                  </div>
                  <p className="text-sm text-[#fff6e8]/90">Prichod/odchod a smerove sipky: placeholder.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Mala mapa k Bufetu na dobrom mieste</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid h-44 place-items-center rounded-xl border-2 border-dashed border-[#fcefdd]/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(0,179,231,0.15)_100%)] p-4 text-center text-[#fff6e8]/90">
                    Mini mapa peso (placeholder)
                  </div>
                  <p className="text-sm text-[#fff6e8]/90">Orientacny cas peso: placeholder.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#fff6e8] py-16 text-[#222] md:py-20" id="faq">
          <div className="mx-auto w-[min(1310px,92vw)]">
            <h2 className="text-3xl font-black uppercase tracking-[0.14em] text-[#0a2731] md:text-4xl">FAQ</h2>
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
          <h2 className="text-3xl font-black uppercase tracking-[0.12em] text-[#f3b026] md:text-4xl">Kontakt</h2>
          <div className="mt-4 space-y-1 text-[#fff6e8]/95">
            <p>Organizator: placeholder</p>
            <p>E-mail: placeholder@example.com | Telefon: +421 xxx xxx xxx</p>
          </div>
          <div className="mt-6">
            <Button asChild variant="outline" size="sm">
              <a href="#domov">Spat hore</a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-[#fff6e8]/80">
            © {edition.year} {edition.title}
          </p>
        </div>
      </footer>
    </>
  );
}
