import Icon from '@/components/ui/AppIcon';

const contactMethods = [
  {
    id: 'email',
    label: 'Email',
    value: 'contact@example.com',
    icon: 'EnvelopeIcon',
    href: 'mailto:contact@example.com',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/username',
    icon: 'CodeBracketIcon',
    href: 'https://github.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/username',
    icon: 'BriefcaseIcon',
    href: 'https://linkedin.com',
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      <div className="space-y-4">
        {contactMethods.map((method) => (
          <a
            key={method.id}
            href={method.href}
            target={method.id !== 'email' ? '_blank' : undefined}
            rel={method.id !== 'email' ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-black/40 hover:border-primary transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Icon name={method.icon as any} size={24} className="text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">{method.label}</div>
              <div className="text-foreground font-medium">{method.value}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
