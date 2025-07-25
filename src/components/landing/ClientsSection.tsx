import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function ClientsSection() {
  const t = useTranslations('Clients');

  return (
    <section id="clients" className="items-center">
      <h2>{t('title')}</h2>
      <p className="text-center">{t('p')}</p>
      <div className="flex justify-center items-center content-center gap-8 flex-shrink-0 flex-wrap">
        <Image src="/brands/heineken.svg" alt="Heineken" width={197} height={48} />
        <Image src="/brands/salesforce.svg" alt="Salesforce" width={105} height={73} />
        <Image src="/brands/airasia.svg" alt="Air Asia" width={90} height={90} />
        <Image src="/brands/heroku.svg" alt="Heroku" width={171} height={48} />
        <Image src="/brands/rhb.svg" alt="RHB" width={128} height={41} />
        <Image src="/brands/snoopdogg.svg" alt="Snoop Dogg" width={172} height={48} />
        <Image src="/brands/fave.svg" alt="Fave" width={100} height={63} />
        <Image src="/brands/easypark.svg" alt="EasyPark" width={200} height={50} />
      </div>
    </section>
  );
}