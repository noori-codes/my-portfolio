import { ContactCta } from "@/components/ContactCta";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { HomeTeaching } from "@/components/HomeTeaching";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <HomeTeaching />
      <ContactCta />
    </>
  );
}
