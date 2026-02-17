import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const featuredProjects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A modern web application with cutting-edge features',
    image: '/assets/images/no_image.png',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Scalable backend system with microservices architecture',
    image: '/assets/images/no_image.png',
    tags: ['Node.js', 'Docker', 'AWS'],
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Mobile-first responsive design implementation',
    image: '/assets/images/no_image.png',
    tags: ['React Native', 'UI/UX', 'Design'],
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">Featured Work</h2>
          <Link
            href="/projects"
            className="text-primary hover:underline flex items-center gap-2"
          >
            View All Projects
            <Icon name="FolderIcon" size={20} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden border border-white/10 bg-black/40 hover:border-primary transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
