import { ContactCta } from "@/components/ContactCta";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { HomeIntro } from "@/components/HomeIntro";
import { HomeStack } from "@/components/HomeStack";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <FeaturedWork />
      <HomeStack />
      <ContactCta />
    </>
  );
}
