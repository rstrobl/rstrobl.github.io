import { useTranslations } from 'next-intl';

export default function ServicesSection() {
  const t = useTranslations('Services');

  return (
    <section id="services" className="w-full justify-center">
      <h2>{t('title')}</h2>
      <p>{t('p')}</p>

      <div className="service-list">
        <div>
          <img src="/product_dev.jpg" />
          <h3>{t('product_dev_title')}</h3>
          <p>{t('product_dev_p')}</p>
        </div>

        <div>
          <img src="/code_audit.jpg" />
          <h3>{t('tech_audit_title')}</h3>
          <p>{t('tech_audit_p1')}</p>
          <p>{t('tech_audit_p2')}</p>
        </div>

        <div>
          <img src="/strategy.jpg" />
          <h3>{t('digital_strategy_title')}</h3>
          <p>{t('digital_strategy_p1')}</p>
          <p>{t('digital_strategy_p2')}</p>
        </div>

        <div>
          <img src="/ai_brain.jpg" />
          <h3>{t('ai_title')}</h3>
          <p>{t('ai_p')}</p>
        </div>
      </div>
    </section>
  );
}