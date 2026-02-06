"use client";

import { useTranslations } from 'next-intl';

export default function ProcessSection() {
  const t = useTranslations('Process');

  return (
    <section id="process" className="w-full">
      <h2>{t('title')}</h2>
      <p className="mb-8">{t('subtitle')}</p>
      
      <div className="relative">
        {/* Timeline line - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary-light -translate-x-1/2"></div>
        
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="md:w-1/2 md:text-right md:pr-8">
              <span className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full mb-2">
                {t('step1.label')}
              </span>
              <h3 className="text-xl font-medium mb-2">{t('step1.title')}</h3>
              <p className="text-grey text-base">{t('step1.desc')}</p>
            </div>
            <div className="hidden md:flex w-4 h-4 bg-primary rounded-full z-10 mx-auto"></div>
            <div className="md:w-1/2 md:pl-8"></div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="md:w-1/2 md:pr-8"></div>
            <div className="hidden md:flex w-4 h-4 bg-primary rounded-full z-10 mx-auto"></div>
            <div className="md:w-1/2 md:pl-8">
              <span className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full mb-2">
                {t('step2.label')}
              </span>
              <h3 className="text-xl font-medium mb-2">{t('step2.title')}</h3>
              <p className="text-grey text-base">{t('step2.desc')}</p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="md:w-1/2 md:text-right md:pr-8">
              <span className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full mb-2">
                {t('step3.label')}
              </span>
              <h3 className="text-xl font-medium mb-2">{t('step3.title')}</h3>
              <p className="text-grey text-base">{t('step3.desc')}</p>
            </div>
            <div className="hidden md:flex w-4 h-4 bg-primary rounded-full z-10 mx-auto"></div>
            <div className="md:w-1/2 md:pl-8"></div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="md:w-1/2 md:pr-8"></div>
            <div className="hidden md:flex w-4 h-4 bg-primary rounded-full z-10 mx-auto"></div>
            <div className="md:w-1/2 md:pl-8">
              <span className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full mb-2">
                {t('step4.label')}
              </span>
              <h3 className="text-xl font-medium mb-2">{t('step4.title')}</h3>
              <p className="text-grey text-base">{t('step4.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
