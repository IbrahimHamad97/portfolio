import { AboutSection } from "@/app/_components/about-section";
import { BackgroundLayers } from "@/app/_components/background-layers";
import { ContactSection } from "@/app/_components/contact-section";
import { ExperienceSection } from "@/app/_components/experience-section";
import { Hero } from "@/app/_components/hero";
import { HobbiesSection } from "@/app/_components/hobbies-section";
import { ProjectsSection } from "@/app/_components/projects-section";

export default function Home() {
  return (
    <main className="flex-1">
      <BackgroundLayers />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <HobbiesSection />
      <ContactSection />
    </main>
  );
}
