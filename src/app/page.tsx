import { ContactCta } from "@/components/ContactCta";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { StackStrip } from "@/components/StackStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <StackStrip />
      <ContactCta />
    </>
  );
}
