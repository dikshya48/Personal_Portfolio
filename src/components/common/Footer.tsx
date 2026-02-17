import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const currentYear = 2026;

  const navLinks = [
    { id: 'footer_home', label: 'Home', href: '/' },
    { id: 'footer_projects', label: 'Projects', href: '/projects' },
    { id: 'footer_skills', label: 'Skills', href: '/skills' },
    { id: 'footer_contact', label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { id: 'social_linkedin', name: 'LinkedIn', icon: 'BriefcaseIcon', href: 'https://www.linkedin.com/in/dikshyagiri/' },
    { id: 'social_github', name: 'GitHub', icon: 'CodeBracketIcon', href: 'https://github.com/dikshya48' },
  ];

  return (
    <footer className="border-t border-white/10 py-12 bg-black/40">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-base text-muted-foreground">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Icon name="SparklesIcon" size={20} className="text-primary" />
            <span className="font-bold text-lg tracking-tight text-foreground">Dikshya Giri</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="font-medium tracking-widest uppercase hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <Icon name={social.icon as any} size={20} />
              </a>
            ))}
            <span className="ml-4">© {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;