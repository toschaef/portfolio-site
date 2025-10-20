'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import projects from '../../../projects.json';
import type { Project } from '../../../types';
import Image from 'next/image';
import Link from 'next/link';
import renderIcon from '@/utils/renderIcon';
import { Github, Globe, Zap, ListChecks } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ProjectPage() {
  const params = useParams();
  const { slug } = params;
  const project = (projects as Project[]).find(p => p.slug === slug);
  if (!project) return notFound();

  const Tag = ({ children }: { children: React.ReactNode }) => (
    <span
      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
    >
      {children}
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto py-8"> 
      <article className="w-full space-y-16">

        {/* header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 border-b border-border/50 pb-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            {project.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Tag>{project.type}</Tag>
            <Tag>{project.status}</Tag>
            <Tag>{project.role}</Tag>
          </div>
        </motion.header>

        {/* main */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Overview
          </h2>
          <p className="leading-relaxed text-base md:text-lg text-foreground/90">
            {project.description}
          </p>
        </motion.section>

        {/* features */}
        {project.features && <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-primary" />
            Key Features
          </h2>
          <ul className="space-y-2 text-base text-foreground">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary mt-1">
                  &bull;
                </span>
                <span className='text-muted-foreground'>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.section>}

        {/* gallery */}
        {project.images && project.images.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Screenshots & Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.images.map((img, i) => (
                <div key={i} className="relative w-full aspect-[4/3] rounded-xl shadow-xl overflow-hidden border border-border/50 transition-shadow duration-300 hover:shadow-primary/30">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* tech stack */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1.5 text-secondary-foreground font-medium flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02]"
              >
                {renderIcon(t)}
              </span>
            ))}
          </div>
        </motion.section>

        {/* footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-start gap-4 pt-10 border-t border-border/50"
        >
          {project.repo && <Link
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
          >
            <Github className="w-5 h-5" />
            View Repo
          </Link>}
          {project.link && <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-border/70 text-foreground font-semibold rounded-lg hover:bg-secondary transition-colors"
          >
            <Globe className="w-5 h-5" />
            Live Demo
          </Link>}
        </motion.footer>
        
        {/* back button */}
        <div className='pt-10'>
          <Link href="/projects" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 font-medium">
            &larr; Back to All Projects
          </Link>
        </div>
      </article>
    </div>
  );
}