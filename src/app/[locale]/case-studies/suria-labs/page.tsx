import {routing} from '@/i18n/routing';

export default async function SuriaLabs({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main className="flex flex-col gap-8 sm:items-start pt-20 imprint">
      <a href={`/${locale}/#about`} className="text-primary hover:underline">← Back</a>
      
      <h1>Suria Labs</h1>
      <p className="text-xl text-grey">Co-Founder & CTO · 2015–2023 · Acquired by Shortcut (Norway)</p>

      <h3>The Story</h3>
      <p>
        In 2015, I co-founded Suria Labs in Kuala Lumpur with a simple thesis: Malaysia had exceptional engineering talent, but local agencies weren&apos;t building world-class products. We set out to change that.
      </p>

      <h3>What I Built</h3>
      <p>
        As CTO, I was hands-on across every dimension of the business:
      </p>
      <ul>
        <li><b>Team</b> — Grew from 2 founders to 30 engineers, designers, and PMs. Built a culture that attracted top Malaysian developers.</li>
        <li><b>Technical leadership</b> — Defined architecture standards, code review processes, and technology choices across 50+ client projects.</li>
        <li><b>Client delivery</b> — Led sales presentations, scoped projects, and stayed hands-on with key accounts.</li>
        <li><b>Products</b> — Built internal tools and products including smec.io (HR SaaS) which I still hold equity in.</li>
      </ul>

      <h3>The Outcome</h3>
      <p>
        After 8 years of profitable growth, Suria Labs was acquired by <b>Shortcut</b>, Norway&apos;s leading mobile development agency. The company now operates as <b>Shortcut Asia</b>, extending Shortcut&apos;s capabilities into the APAC region.
      </p>
      <ul>
        <li>30-person team at acquisition</li>
        <li>50+ shipped products for clients across fintech, logistics, entertainment, and e-commerce</li>
        <li>Profitable every year of operation</li>
        <li>Team retained post-acquisition — a testament to the culture we built</li>
      </ul>

      <h3>What I Learned</h3>
      <p>
        Building Suria Labs taught me that great software companies are built on culture first, technology second. The technical decisions matter — but hiring right, maintaining standards, and creating an environment where engineers do their best work matters more.
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
