import { HeroExperience } from '@/components/macos/HeroExperience';
import { BackToDesktopButton } from '@/components/macos/BackToDesktopButton';
import { ScrollShell } from '@/components/macos/ScrollShell';
import { MobileScrollHeader } from '@/components/mobile/MobileScrollHeader';
import { MobileBottomNav } from '@/components/mobile/MobileBottomNav';
import { ScrollIntro } from '@/components/sections/ScrollIntro';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <HeroExperience />
      <BackToDesktopButton />
      <MobileScrollHeader />
      <ScrollShell>
        <ScrollIntro />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </ScrollShell>
      <MobileBottomNav />
    </>
  );
}
