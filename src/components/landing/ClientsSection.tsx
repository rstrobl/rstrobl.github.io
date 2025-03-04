import Image from "next/image";

export default function ClientsSection() {
  return (
    <section id="clients" className="items-center">
      <h2>Who I work with?</h2>
      <p className="text-center">
        I collaborate with established corporations, innovative startups, and dynamic scale-ups, delivering tailored solutions that drive growth and transformation.
      </p>
      <div className="flex justify-center items-center content-center gap-8 flex-shrink-0 flex-wrap">
        <Image src="/brands/heineken.svg" alt="Heineken" width={197} height={48} />
        <Image src="/brands/salesforce.svg" alt="Salesforce" width={105} height={73} />
        <Image src="/brands/airasia.svg" alt="Air Asia" width={90} height={90} />
        <Image src="/brands/heroku.svg" alt="Heroku" width={171} height={48} />
        <Image src="/brands/rhb.svg" alt="RHB" width={128} height={41} />
        <Image src="/brands/snoopdogg.svg" alt="Snoop Dogg" width={172} height={48} />
        <Image src="/brands/fave.svg" alt="Fave" width={100} height={63} />
      </div>
    </section>
  );
}