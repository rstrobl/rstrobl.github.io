"use client";

import { useForm } from '@formspree/react';
import { useTranslations } from 'next-intl';

export default function ClientsSection() {
  const t = useTranslations('Contact');
  const [state, handleSubmit] = useForm("mldeplgr");
  if (state.succeeded) {
      return (
        <section id="contact">
          <div className="bg-primary full-width md:m-0 md:w-full text-white">
            <h2>{t('thanks')}</h2>
            <p className="text-white">{t('thanks_p')}</p>
          </div>
        </section>
      );
  }
  return (
    <section id="contact" className="bg-primary-light full-width md:w-full md:flex md:flex-row md:justify-center">
      <div className="full-width full-inline md:w-3/4">
        <h2>{t('title')}</h2>
        <p>{t('p')}</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <input type="text" name="name" placeholder={t('name')} required />
          <input type="text" name="email" placeholder={t('email')} required />
          <textarea name="message" className="h-[150px]" placeholder={t('message')} required></textarea>
          <br />
          <button type="submit" className="btn-primary light" disabled={state.submitting}>{t('send')}</button>

          <div className="text-center">{t('or')}</div>

          <a className="btn-primary" href="https://calendly.com/robertstrobl/30mins">{t('book_appointment')}</a>

        </form>
      </div>
    </section>
  );
}