import { Hero } from "@/components/Hero";
import { CuratedProjects } from "@/components/CuratedProjects";
import { FooterCTA } from "@/components/FooterCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CuratedProjects />
      <FooterCTA />
    </>
  );
}
