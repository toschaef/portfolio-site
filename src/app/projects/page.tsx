'use client';

import { motion } from 'framer-motion';
import projects from '@/projects.json';
import type { Project } from '@/types';
import { Code } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';

export default function AllProjects() {

  return (
    <div className="space-y-16">
      <section className="text-center space-y-4 pt-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold tracking-tighter flex items-center justify-center gap-3"
        >
          <Code className="w-8 h-8 text-primary" />
          All Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Collection of all my projects
        </motion.p>
      </section>

      {/* all projects */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, idx: number) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}