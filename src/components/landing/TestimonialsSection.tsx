"use client";

import { useTranslations } from 'next-intl';

const testimonials = [
  {
    key: "detlev",
    name: "Detlev Hülsebusch",
    role: "testimonials.detlev.role",
    quote: "testimonials.detlev.quote",
    context: "testimonials.detlev.context"
  },
  {
    key: "bjarte", 
    name: "Bjarte Olsen",
    role: "testimonials.bjarte.role",
    quote: "testimonials.bjarte.quote",
    context: "testimonials.bjarte.context"
  }
];

export default function TestimonialsSection() {
  const t = useTranslations('Testimonials');

  return (
    <section id="testimonials" className="w-full">
      <h2 className="text-center mb-4">{t('title')}</h2>
      <p className="text-center text-grey mb-12 max-w-2xl mx-auto">{t('subtitle')}</p>
      
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.key}
            className="relative p-8 bg-primary-light rounded-lg"
          >
            {/* Quote mark */}
            <span className="absolute top-4 left-6 text-6xl text-primary opacity-30 font-serif leading-none">"</span>
            
            <blockquote className="relative z-10 pt-6">
              <p className="text-lg text-black leading-relaxed mb-6 italic">
                "{t(`${testimonial.key}.quote`)}"
              </p>
              
              <footer className="flex flex-col">
                <cite className="not-italic font-semibold text-black text-base">
                  {testimonial.name}
                </cite>
                <span className="text-grey text-sm mt-1">
                  {t(`${testimonial.key}.role`)}
                </span>
                <span className="text-primary text-sm mt-1">
                  {t(`${testimonial.key}.context`)}
                </span>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
