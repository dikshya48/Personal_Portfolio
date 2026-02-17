import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl p-12 text-center border border-primary/30">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Get In Touch
              <Icon name="EnvelopeIcon" size={20} />
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
            >
              View My Work
              <Icon name="FolderIcon" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
