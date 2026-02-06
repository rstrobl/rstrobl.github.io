import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('About');

  return (
    <section id="about">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col gap-6 md:w-3/5">
          <h1 className="text-4xl md:text-5xl leading-tight">{t('title')}</h1>
          <p className="text-xl md:text-2xl text-black font-light">
            {t('p1_1')} 
            <span className="text-primary font-medium">{t('tech_entrepreneur')}</span>
            {t('p1_2')}
          </p>
          <p>{t('p2')}</p>
          
          {/* Quick credibility */}
          <div className="flex flex-wrap gap-4 text-sm text-grey mt-2">
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> {t('cred1')}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> {t('cred2')}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> {t('cred3')}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Image 
              src="/robert@2x.png" 
              alt="Robert Strobl" 
              width={350} 
              height={196}
              className="rounded-lg"
            />
            {/* Berlin badge */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-grey">
              📍 Berlin
            </div>
          </div>
          <Link className="btn-primary w-full max-w-[300px]" href="#contact">{t('cta')}</Link>
        </div>
      </div>
    </section>
  );
}
