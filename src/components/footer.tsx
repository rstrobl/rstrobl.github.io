import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LinkedInIcon from '../components/icons/linkedin';
import GithubIcon from '../components/icons/github';
import MailIcon from '../components/icons/mail';

export default function Footer() {
  const t = useTranslations('Global.footer');

  return (
    <footer className="flex flex-col gap-1 items-center justify-center py-20">
      <div className="flex flex-wrap gap-6 pb-10">
        <Link href="https://www.linkedin.com/in/robert-strobl/"><LinkedInIcon /></Link>
        <Link href="https://github.com/rstrobl"><GithubIcon /></Link>
        <Link href="mailto:mail@rstrobl.com"><MailIcon /></Link>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Robert Strobl
      </p>
      <p>
        <Link href="impressum">{t('imprint')}</Link>
        <Link href="privacy_policy">{t('privacy_policy')}</Link>
      </p>
    </footer>
  );
}