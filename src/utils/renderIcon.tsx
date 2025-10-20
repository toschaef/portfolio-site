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
  'c++'
]);

export default function renderIcon(tech: string) {
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