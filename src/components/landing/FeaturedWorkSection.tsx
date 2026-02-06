"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from 'next-intl';

const projects = [
  {
    name: "Cardentity",
    role: "Fractional CTO",
    years: "2025–present",
    outcome: "Replaced legacy PHP with modern Nest.js — new features now ship in days, not weeks",
    href: "/case-studies/cardentity"
  },
  {
    name: "Suria Labs",
    role: "Co-Founder & CTO",
    years: "2015–2023",
    outcome: "Built 30-person agency from scratch — acquired by Shortcut (Norway)",
    href: "/case-studies/suria-labs"
  },
  {
    name: "Parkling", 
    role: "Founding Engineer",
    years: "2016–2017",
    outcome: "Built MVP that became Europe's leading parking data platform — acquired by BMW/Daimler",
    href: "/case-studies/parkling"
  }
];

export default function FeaturedWorkSection() {
  const t = useTranslations('FeaturedWork');

  return (
    <section id="work">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {t('availability')}
          </span>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Link 
            key={project.name}
            href={project.href}
            className="block p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-medium mb-1">{project.name}</h3>
            <p className="text-primary text-sm mb-2">{project.role} · {project.years}</p>
            <p className="text-grey text-sm">{project.outcome}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
