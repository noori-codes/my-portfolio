import { BuilderNote } from "@/components/BuilderNote";
import { ContactClose } from "@/components/ContactClose";
import { Hero } from "@/components/Hero";
import { HowIBuild } from "@/components/HowIBuild";
import { SelectedWork } from "@/components/SelectedWork";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <HowIBuild />
      <BuilderNote />
      <ContactClose />
    </>
  );
}
