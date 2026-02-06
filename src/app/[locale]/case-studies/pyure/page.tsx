import {routing} from '@/i18n/routing';

export default async function Pyure({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main className="flex flex-col gap-8 sm:items-start pt-20 imprint">
      <a href={`/${locale}/#about`} className="text-primary hover:underline">← Back</a>
      
      <h1>Pyure</h1>
      <p className="text-xl text-grey">Founding Engineer · 2025–present · Sustainability × AdTech</p>

      <h3>The Problem</h3>
      <p>
        Digital advertising has a carbon problem. Every ad impression, every data transfer, every server request adds up. Brands increasingly have ESG commitments — but no way to measure or optimize the carbon footprint of their media spend.
      </p>

      <h3>What I Built</h3>
      <p>
        As Founding Engineer at Pyure, I designed and built the core data infrastructure:
      </p>
      <ul>
        <li><b>Data pipeline</b> — Ingesting and processing advertising data from major DSPs, SSPs, and publishers to calculate carbon emissions per impression</li>
        <li><b>Measurement platform</b> — Pyure.Measure enables inventory transparency and carbon footprint tracking across campaigns</li>
        <li><b>Integration layer</b> — Connecting with media buying workflows so brands can optimize for both ROAS and emissions</li>
      </ul>

      <h3>The Impact</h3>
      <p>
        Pyure now works with major players including:
      </p>
      <ul>
        <li><b>Kleinanzeigen</b> (Germany&apos;s largest classifieds platform)</li>
        <li><b>Ströer</b> (leading German OOH and digital media company)</li>
        <li><b>Indeed</b></li>
        <li><b>GroupM</b> (world&apos;s largest media investment company)</li>
      </ul>
      <p>
        The platform enables these companies to quantify, report, and reduce the carbon footprint of their advertising — turning sustainability from a buzzword into measurable action.
      </p>

      <h3>Tech Stack</h3>
      <p className="text-grey">
        Python · Data pipelines · Cloud infrastructure · API integrations with major ad platforms
      </p>

      <div className="mt-8">
        <a href={`/${locale}/#contact`} className="btn-primary">Work with me →</a>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
