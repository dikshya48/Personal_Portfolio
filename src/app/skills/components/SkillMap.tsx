'use client';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 87 },
      { name: 'Express', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'MongoDB', level: 82 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 72 },
    ],
  },
];

const SkillMap = () => {
  return (
    <div className="mb-12 space-y-8">
      {skillCategories.map((category) => (
        <div key={category.category} className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
          <div className="space-y-3">
            {category.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-black/40 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillMap;
