import AppImage from '@/components/ui/AppImage';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with payment integration',
    image: '/assets/images/no_image.png',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Real-time analytics dashboard with data visualization',
    image: '/assets/images/no_image.png',
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Chart.js'],
  },
  {
    id: 3,
    title: 'API Gateway',
    description: 'Microservices API gateway with authentication',
    image: '/assets/images/no_image.png',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'JWT'],
  },
  {
    id: 4,
    title: 'Mobile App',
    description: 'Cross-platform mobile application',
    image: '/assets/images/no_image.png',
    category: 'Mobile',
    tags: ['React Native', 'Firebase'],
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with animations',
    image: '/assets/images/no_image.png',
    category: 'Frontend',
    tags: ['Next.js', 'Tailwind CSS'],
  },
  {
    id: 6,
    title: 'Task Management',
    description: 'Collaborative task management system',
    image: '/assets/images/no_image.png',
    category: 'Full Stack',
    tags: ['Vue.js', 'Django', 'PostgreSQL'],
  },
];

const ProjectsGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
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
            <div className="text-sm text-primary mb-2">{project.category}</div>
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
  );
};

export default ProjectsGrid;
