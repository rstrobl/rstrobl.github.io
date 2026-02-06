import { useTranslations } from 'next-intl';

export default function ClientsSection() {
  const t = useTranslations('Clients');

  return (
    <section id="clients" className="w-full">
      <h2 className="text-center">{t('title')}</h2>
      
      <div className="max-w-3xl mx-auto mt-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Persona 1 */}
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-medium mb-2">{t('persona1.title')}</h3>
            <p className="text-grey text-sm">{t('persona1.desc')}</p>
          </div>
          
          {/* Persona 2 */}
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-lg font-medium mb-2">{t('persona2.title')}</h3>
            <p className="text-grey text-sm">{t('persona2.desc')}</p>
          </div>
          
          {/* Persona 3 */}
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-lg font-medium mb-2">{t('persona3.title')}</h3>
            <p className="text-grey text-sm">{t('persona3.desc')}</p>
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-primary-light rounded-lg">
          <p className="text-center text-black text-lg font-medium mb-2">
            {t('not_for')}
          </p>
          <p className="text-center text-grey text-base">
            {t('not_for_desc')}
          </p>
        </div>
      </div>
    </section>
  );
}
