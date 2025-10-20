import type { ReactNode } from 'react';
// @ts-ignore
import './globals.css';
import Link from 'next/link';
import { GeistSans } from 'geist/font/sans';
import { Github, Linkedin, Instagram } from 'lucide-react';

export const metadata = {
  title: 'Thomas Schaefer | Developer',
  description: 'Full-stack developer portfolio showcasing passion for low-coupling, high-cohesion code.',
};

// Reusable NavLink component for navigation items
function NavLink({ href, children }: { href: string, children: ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

// Reusable SocialLink component for social media icons
function SocialLink({ href, children }: { href: string, children: ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body className="bg-background text-foreground min-h-screen font-sans flex flex-col antialiased">
        {/* header */}
        <header className="w-full py-4 px-6 sm:px-12 border-b border-border/70 flex justify-between items-center sticky top-0 bg-background/80 backdrop-blur-sm z-50">
          {/* nav links */}
          <div className="flex items-center gap-x-8">
            <Link href="/" className="text-xl font-bold tracking-tight hover:text-primary transition-colors duration-200">
              Thomas Schaefer
            </Link>
            <nav className="hidden md:flex items-center gap-x-6">
              <NavLink href="/projects">Projects</NavLink>
              {/* todo add more pages */}
            </nav>
          </div>

          {/* socials */}
          <div className="flex items-center gap-x-4">
            <SocialLink href="https://github.com/toschaef">
              <Github size={20} strokeWidth={1.75} />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/thomas-schaefer-811453353/">
              <Linkedin size={20} strokeWidth={1.75} />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/toschaef/">
              <Instagram size={20} strokeWidth={1.75} />
            </SocialLink>
          </div>
        </header>

        {/* main */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 py-16">
          {children}
        </main>

        {/* footer */}
        <footer className="w-full border-t border-border/70 py-6 px-6 sm:px-12 text-xs text-muted-foreground text-center">
          <p className="space-x-4">
            <span>© {new Date().getFullYear()} Thomas Schaefer</span>
            <span>| tschaefer4@huskers.unl.edu</span>
          </p>
        </footer>
      </body>
    </html>
  );
}