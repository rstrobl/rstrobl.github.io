import {routing} from '@/i18n/routing';

export default async function Parkling({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main className="flex flex-col gap-8 sm:items-start pt-20 imprint">
      <a href={`/${locale}/#about`} className="text-primary hover:underline">← Back</a>
      
      <h1>Parkling</h1>
      <p className="text-xl text-grey">Founding Engineer · 2016–2017 · Acquired by BMW/Daimler → EasyPark</p>

      <h3>The Problem</h3>
      <p>
        Urban drivers spend an average of 20 minutes searching for parking — creating traffic, pollution, and frustration. Centerbridge (majority owner of APCOA, Europe&apos;s largest parking operator) wanted to solve this with real-time parking prediction.
      </p>

      <h3>What I Built</h3>
      <p>
        As Founding Engineer, I designed and built Parkling&apos;s technical foundation from scratch:
      </p>
      <ul>
        <li><b>Prediction algorithms</b> — Core ML models to forecast parking availability using historical patterns, events, and real-time data</li>
        <li><b>Scalable backend</b> — Ruby on Rails API handling millions of data points from sensors and mobile apps</li>
        <li><b>Mobile apps</b> — React Native apps for both data collection (drivers) and B2B clients</li>
        <li><b>Hired the team</b> — Recruited the CTO, data scientists, and engineering team that scaled the company</li>
      </ul>

      <h3>The Outcome</h3>
      <p>
        Parkling became the leading on-street parking data provider in Europe. The technology I built enabled:
      </p>
      <ul>
        <li>Partnerships with major cities to reduce parking search traffic</li>
        <li>Integration into navigation systems used by millions</li>
        <li><b>Acquisition by PARK NOW</b> (BMW Group / Daimler Mobility joint venture)</li>
        <li>Subsequent acquisition by <b>EasyPark Group</b>, now operating in 1,300+ cities worldwide</li>
      </ul>

      <h3>Tech Stack</h3>
      <p className="text-grey">
        Ruby · Rails · React Native · React.js · Python · Java · Graphhopper · PostgreSQL · AWS
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
