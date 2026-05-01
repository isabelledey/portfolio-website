import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const fallbackProjects = [
  {
    id: 'nutrisnap',
    name: 'NutriSnap AI',
    description: 'Next-gen AI nutrition app leveraging computer vision for instant calorie tracking.',
    topics: ['Generative AI', 'React', 'Computer Vision'],
    url: '#',
    subtitle: 'Original atmospheric sample'
  },
  {
    id: 'recipe-classifier',
    name: 'ML Recipe Classifier',
    description: 'Supervised learning pipeline achieving 98% accuracy in ingredient classification.',
    topics: ['Python', 'Scikit-Learn', 'Pandas'],
    url: '#',
    subtitle: 'Original atmospheric sample'
  },
  {
    id: 'face-enhancer',
    name: 'AI Face Enhancer',
    description: 'High-fidelity GAN-based tool for facial detail restoration in legacy photos.',
    topics: ['LLMs', 'Full Stack', 'Next.js'],
    url: '#',
    subtitle: 'Original atmospheric sample'
  }
];

const normalizeRepo = (repo) => ({
  id: repo.id,
  name: repo.name,
  description: repo.description || 'A GitHub repository from the portfolio backend.',
  topics: repo.topics?.length ? repo.topics : [repo.language || 'Repository'],
  url: repo.html_url,
  subtitle: repo.homepage || 'GitHub repository'
});

const ProjectsGrid = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('GitHub API request failed');
        }
        const data = await response.json();
        const normalized = data.map(normalizeRepo).slice(0, 6);
        setProjects(normalized);
      } catch (error) {
        console.error(error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-xl px-container-margin md:px-lg" id="artifacts">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-lg">
          <div>
            <span className="font-label-caps text-primary">PORTFOLIO</span>
            <h2 className="font-display text-h1 text-on-surface">Featured Artifacts</h2>
          </div>
          <div className="hidden md:block h-px flex-1 mx-lg bg-gradient-to-r from-violet-500/50 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {(loading ? fallbackProjects : projects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
