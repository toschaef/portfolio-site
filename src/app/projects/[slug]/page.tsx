'use client';

import projects from '../../../projects.json';
import type { Project } from '../../../types';
import { useParams, useRouter } from 'next/navigation';
import StackIcon, { IconName } from 'tech-stack-icons';

const VALID_ICONS = new Set<IconName>([
  'js',
  'typescript',
  'react',
  'reactrouter',
  'nextjs2',
  'mongodb',
  'nodejs',
  'expressjs',
  'mysql',
  'redis',
  'docker',
  'aws',
  'tailwindcss',
  'json',
  'gemini',
  'mongoose',
  'eslint',
]);

function renderTechIcon(tech: string) {
  if (VALID_ICONS.has(tech)) {
    return (
      <StackIcon
        key={tech}
        name={tech}
        variant="dark"
        className="w-10 h-10 transition-transform duration-200 hover:scale-110"
      />
    );
  }

  return (
    <div
      key={tech}
      className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center text-xs text-gray-300"
      title={tech}
    >
      {tech}
    </div>
  );
}

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = useParams();
  const typedProjects = projects as Project[];
  const project = typedProjects.find((p) => p.slug === slug);

  if (!project) {
    router.push('/');
    return null;
  }

  return (
    <main className="space-y-8 max-w-3xl mx-auto px-4 py-10">
      <header className="border-b border-gray-700 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-100">{project.name}</h1>
        <p className="text-gray-400">{project.date}</p>
      </header>

      <section>
        <p className="text-gray-300 leading-relaxed">{project.description}</p>
      </section>

      {project.tech && (
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-100">Tech Stack</h2>
          <ul className="flex flex-wrap gap-3">{project.tech.map((t) => renderTechIcon(t))}</ul>
        </section>
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-accent text-bg px-5 py-2 rounded-md font-medium hover:opacity-90 transition"
        >
          Visit Project
        </a>
      )}
    </main>
  );
}