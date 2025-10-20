'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import projects from '../projects.json';
import type { Project } from '../types';
import { ArrowRight, Code, User } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';

export default function Landing() {
  const previewSlugs = ['portfolio-site', 'finance-app', 'autocard'];
  const previewProjects = projects.filter((p: Project) =>
    previewSlugs.includes(p.slug)
  );

  return (
    <div className="space-y-24">
      {/* main */}
      <section className="text-center space-y-6 pt-12 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-extrabold tracking-tighter max-w-4xl mx-auto text-foreground"
        >
          something big
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          I strive to write code that is low in coupling and high in cohesion.
        </motion.p>
      </section>

      {/* projects */}
      <section className="max-w-6xl mx-auto space-y-10 p-8 md:p-12 bg-muted rounded-lg">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold flex items-center gap-3"
        >
          <Code className="w-7 h-7 text-primary" />
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProjects.map((project: Project, idx: number) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>

        <div className="text-center pt-6">
          <Link
            href="/projects"
            className="text-primary font-medium inline-flex items-center gap-2 text-lg group hover:text-primary/80 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* about or sum */}
      <section className="max-w-4xl mx-auto space-y-8 p-8 md:p-12 bg-muted rounded-lg" id="about">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold flex items-center gap-3"
        >
          <User className="w-7 h-7 text-primary" />
          About Me
        </motion.h2>
        <div className="space-y-5 text-lg">
          <p className="text-muted-foreground leading-relaxed">
            I love coding
          </p>
        </div>
      </section>
      
      {/* other sections */}
      <div className="text-center py-12 bg-muted rounded-lg" id="contact">
        <h2 className="text-3xl font-bold text-primary">something here</h2>
        <p className="font-mono text-muted-foreground mt-4">
          tschaefer4@huskers.unl.edu | 531-205-0490
        </p>
      </div>
    </div>
  );
}