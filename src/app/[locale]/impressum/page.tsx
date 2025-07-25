import {routing} from '@/i18n/routing';

export default function Imprint() {
  return (
    <main className="flex flex-col gap-8 sm:items-start pt-20 imprint">
      <h1>Impressum</h1>

      <h3>Angaben nach §5 TMG</h3>
      <p>
        Nomadiq Labs GmbH<br />
        Korsörer Straße 2<br />
        10437 Berlin
      </p>

      <h3>Vertreten durch</h3>
      <p>
        Robert Strobl
      </p>

      <h3>Registergericht</h3>
      <p>
        Handelsregister<br />
        HRB 249 234 B<br />
        Amtsgericht Charlottenburg
      </p>

      <h3>Umsatzsteuer ID</h3>
      <p>
        DE358933512
      </p>

      <h3>Kontakt</h3>
      <p>
        E-Mail: mail@rstrobl.com<br />
        Internet: www.rstrobl.com
      </p>

      <h3>Haftung für Inhalte</h3>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h3>Haftung für Links</h3>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </p>
      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>
    </main>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
