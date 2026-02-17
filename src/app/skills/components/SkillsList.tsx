const skillsByCategory = [
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go'],
  },
  {
    category: 'Frontend Technologies',
    skills: [
      'React',
      'Next.js',
      'Vue.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Sass',
    ],
  },
  {
    category: 'Backend Technologies',
    skills: [
      'Node.js',
      'Express',
      'Django',
      'FastAPI',
      'REST APIs',
      'GraphQL',
    ],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      'Git',
      'Docker',
      'Kubernetes',
      'AWS',
      'CI/CD',
      'Jenkins',
      'GitHub Actions',
    ],
  },
];

const SkillsList = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {skillsByCategory.map((category) => (
        <div
          key={category.category}
          className="p-6 rounded-lg border border-white/10 bg-black/40"
        >
          <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
