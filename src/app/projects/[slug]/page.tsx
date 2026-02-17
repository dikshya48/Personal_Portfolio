import ProjectCaseStudy from '../components/ProjectCaseStudy';

export function generateStaticParams() {
  return [
    { slug: 'dristi' },
    { slug: 'smart-traffic-signal' },
    { slug: 'gesture-robotic-arm' },
    { slug: 'caldwell-astrobot' },
    { slug: 'activearc-ui' },
  ];
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params?.slug ?? '';
  return <ProjectCaseStudy slug={slug} />;
}
