import {routing} from '@/i18n/routing';

export default async function Cardentity({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main className="flex flex-col gap-8 sm:items-start pt-20 imprint">
      <a href={`/${locale}/#about`} className="text-primary hover:underline">← Back</a>
      
      <h1>Cardentity</h1>
      <p className="text-xl text-grey">Fractional CTO · 2025–present · Automotive</p>

      <h3>The Company</h3>
      <p>
        <a href="https://cardentity.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cardentity</a> is a German automotive company serving both B2C and B2B customers. Their backend was built on an aging PHP Shopware stack that had accumulated years of technical debt — becoming increasingly difficult to maintain, extend, and deploy reliably.
      </p>

      <h3>What I Built</h3>
      <p>
        In just a few months, I rebuilt their entire middleware layer:
      </p>
      <ul>
        <li><b>Modern API</b> — Replaced the legacy PHP backend with a clean Nest.js TypeScript API serving both customer segments</li>
        <li><b>Seamless migration</b> — Decoupled the new API from the existing Shopware frontend, allowing it to remain unchanged while operating through the new backend</li>
        <li><b>Admin tools</b> — Built an internal admin dashboard and external customer portal using React Admin</li>
        <li><b>Testing infrastructure</b> — Automated testing with Jest and browser-based E2E tests via Puppeteer</li>
        <li><b>Containerization</b> — Dockerized the entire stack with docker-compose for consistent deployments</li>
      </ul>

      <h3>The Outcome</h3>
      <ul>
        <li>Eliminated significant technical debt that had been slowing down the team</li>
        <li>Improved maintainability — new features now take days instead of weeks</li>
        <li>Reliable deployments with containerized infrastructure</li>
        <li>Platform ready for future growth — new client types and external integrations can be added cleanly</li>
      </ul>

      <h3>Tech Stack</h3>
      <p className="text-grey">
        TypeScript · Nest.js · React Admin · Jest · Puppeteer · Docker · RESTful APIs · SOAP APIs
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
