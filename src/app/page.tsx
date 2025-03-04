import HomeSection from "../components/landing/HomeSection";
import ServicesSection from "../components/landing/ServicesSection";
import ClientsSection from "../components/landing/ClientsSection";
import ContactSection from "../components/landing/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 md:gap-32 items-center sm:items-start pt-20">
      <HomeSection />
      <div className="border-dashed border-4 border-primary-light w-full"></div>
      <ServicesSection />
      <div className="border-dashed border-4 border-primary-light w-full"></div>
      <ClientsSection />
      <div className="border-dashed border-4 border-primary-light w-full"></div>
      <ContactSection />
    </main>
  );
}
