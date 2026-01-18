import {routing} from '@/i18n/routing';

export default function Parkling() {
  return (
    <main className="flex flex-col gap-8 sm:items-start pt-20 imprint">
      <h1>Parkling</h1>

      <h3>Background</h3>
      <p>
        Parkling is a B2B provider of on-street parking data, originally founded as a venture of Centerbridge, majority shareholder of APCOA, Europe&apos;s largest parking infrastructure operator. The company aims collects on-street data in order to predict parking situations in cities.
      </p>

      <h3>My Role</h3>
      <p>
        As a Founding Engineer, I was responsible for:
      </p>
      <ul>
        <li><b>Algorithm Engineering:</b> Developing key algorithms for real-time parking data.</li>
        <li><b>Building MVP Backend:</b> Designing the backend infrastructure for Parkling&apos;s MVP.</li>
        <li><b>Team Building:</b> Leading recruitment for key roles, including CTO, engineers, data scientists, and mobile developers, setting the foundation for the company&apos;s growth.</li>
      </ul>


      <h3>Key Achievements</h3>
      <ul>
        <li>Developed core algorithms and backend systems, enabling Parkling to provide valuable data.</li>
        <li>Built a strong technical team that contributed to Parkling&apos;s market success.</li>
      </ul>

      <h3>Acquisition</h3>
      <p>
        Parkling was acquired by <b>PARK NOW</b>, a joint venture of <b>BMW Group</b> and <b>Daimler Mobility AG</b>. In 2021, PARK NOW was acquired by <b>EasyPark</b>, solidifying Parkling&apos;s position in the global parking data space.
      </p>

      <h3>Conclusion</h3>
      <p>
        My role at Parkling played a key part in establishing a company that became a leader in on-street parking data, ultimately leading to successful acquisitions and global expansion.
      </p>
    </main>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
