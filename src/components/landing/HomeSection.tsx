import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section id="home">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col gap-8 md:w-3/5">
          <h1>Building Tech Ventures - From Berlin</h1>
          <p>
            With over 20 years of experience as a <span className="text-primary font-medium">tech entrepreneur</span>,
            <span className="text-primary font-medium"> software engineer</span>, and <span className="text-primary font-medium">digital strategist</span>, I bring a wealth of knowledge and 
            proven insights to help ambitious digital ventures scale, innovate, and succeed.
          </p>

          <p>
            I have built 50+ digital products in collaboration with remote teams from around the globe. I also founded, ran, and eventually sold a consultancy in Malaysia, leading a team of 30 developers, specializing in boutique web and mobile app development.           </p>
        </div>
        <div>
          <Image src="/robert@2x.png" alt="Robert Strobl" width={350} height={196} />
          <Link className="btn-primary mx-8" href="/#contact">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
}