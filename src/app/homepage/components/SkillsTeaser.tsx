import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const SkillsTeaser = () => {
  const skillCategories = [
    { name: 'Frontend', count: 8 },
    { name: 'Backend', count: 6 },
    { name: 'Tools', count: 10 },
    { name: 'Languages', count: 5 },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-muted-foreground text-lg mb-8">
              A comprehensive overview of my technical expertise across various
              domains.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skillCategories.map((category) => (
                <div
                  key={category.name}
                  className="p-4 rounded-lg border border-white/10 bg-black/40"
                >
                  <div className="text-3xl font-bold mb-1">{category.count}</div>
                  <div className="text-sm text-muted-foreground">
                    {category.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/skills"
            className="px-8 py-4 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            View All Skills
            <Icon name="AcademicCapIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsTeaser;
