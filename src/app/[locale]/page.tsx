import AboutSection from "../../components/landing/AboutSection";
import ServicesSection from "../../components/landing/ServicesSection";
import ClientsSection from "../../components/landing/ClientsSection";
import ContactSection from "../../components/landing/ContactSection";
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <main className="flex flex-col gap-8 md:gap-32 items-center sm:items-start pt-20">
      <AboutSection />
      <div className="divider"></div>
      <ServicesSection />
      <div className="divider"></div>
      <ClientsSection />
      <div className="divider"></div>
      <ContactSection />
    </main>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
