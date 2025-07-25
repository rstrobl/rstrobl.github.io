import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('About');

  return (
    <section id="about">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col gap-8 md:w-3/5">
          <h1>{t('title')}</h1>
          <p>
            {t('p1_1')} 
            <span className="text-primary font-medium">{t('tech_entrepreneur')}</span>,
            <span className="text-primary font-medium">{t('software_engineer')}</span>,
            {t('and')}
            <span className="text-primary font-medium">{t('digital_strategist')}</span>
            {t('p1_2')}
          </p>
          <p>{t('p2')}</p>
        </div>
        <div>
          <Image src="/robert@2x.png" alt="Robert Strobl" width={350} height={196} />
          <Link className="btn-primary mx-8" href="#contact">{t('cta')}</Link>
        </div>
      </div>
    </section>
  );
}