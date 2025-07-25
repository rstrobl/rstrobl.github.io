import {NextIntlClientProvider} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import type { Metadata } from "next";
import "../globals.css";

import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params : params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Meta'});
 
  return {
    title: t("title"),
    description: t("description"),
    icons: [
      { rel: "icon", url: "/favicon512x512.ico" }
    ],
/*    alternates: routing.locales.map((locale) => ({
      href: `/${locale}`,
      hrefLang: locale
    }))*/
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "de"|"en")) {
    notFound();
  }
 
  // Enable static rendering
  setRequestLocale(locale);
  
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          <div className="min-h-screen px-8 pt-8 container mx-auto">
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
