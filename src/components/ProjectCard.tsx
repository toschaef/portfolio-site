'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Project } from '@/types';
import { ArrowRight } from 'lucide-react';

export const ProjectCard = ({ project, idx }: { project: Project, idx: number }) => (
  <Link
    href={`/projects/${project.slug}`}
    className="block group" 
  >
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className="rounded-xl bg-secondary p-6 shadow-lg border border-border group-hover:border-primary/60 transition-all duration-300 group-hover:-translate-y-px"
    >
      <h3 className="text-xl font-semibold mb-2 tracking-tight">{project.name}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.summary}</p>
      
      {/* tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full text-primary-foreground font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* links */}
      <div className="flex justify-between items-center pt-3 mt-3">
        <span
          className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
        >
          Details <ArrowRight className="w-3 h-3 ml-1" />
        </span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // override card link
            className="text-sm text-primary hover:text-muted-foreground transition-colors"
          >
            Live
          </a>
        )}
      </div>
    </motion.div>
  </Link>
);