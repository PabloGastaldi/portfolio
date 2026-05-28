'use client';

import { ScrollIntro } from '@/components/sections/ScrollIntro';
import { Projects } from '@/components/sections/Projects';

export function ProjectsWindow() {
  return (
    <div className="h-full overflow-auto bg-background text-foreground">
      <ScrollIntro />
      <Projects />
    </div>
  );
}
