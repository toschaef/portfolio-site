'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import projects from '../projects.json';
import type { Project } from '../types';

export default function Home() {
  const typedProjects = projects as Project[];

  return (
    <main className="space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">My Projects</h1>
        <p className="text-gray-400">A quick timeline of what I've built</p>
      </header>

      <div className="relative border-l border-gray-600 pl-6">
        {typedProjects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="mb-10 relative"
          >
            <div className="absolute -left-3 top-1 w-2 h-2 bg-accent rounded-full"></div>
            <Link href={`/projects/${encodeURIComponent(proj.slug)}`}>
              <div className="cursor-pointer hover:bg-surface p-4 rounded-lg transition">
                <h2 className="text-xl font-semibold">{proj.name}</h2>
                <p className="text-sm text-gray-400">{proj.date}</p>
                <p className="mt-2 text-gray-300">{proj.summary}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}