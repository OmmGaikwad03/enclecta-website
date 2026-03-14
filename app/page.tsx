// ── HOME PAGE ──
// Each section is a separate component for performance (lazy loading friendly)
// Components located in: components/home/

import HeroSection from "@/components/home/HeroSection";
import ChatBoxSection from "@/components/home/ChatBoxSection";
import StatsStrip from "@/components/home/StatsStrip";
import PeopleFirstSection from "@/components/home/PeopleFirstSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import InsightsSection from "@/components/home/InsightsSection";
import CareersCTASection from "@/components/home/CareersCTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ChatBoxSection />
      <StatsStrip />
      <PeopleFirstSection />
      <WhatWeDoSection />
      <TestimonialsSection />
      <IndustriesSection />
      <InsightsSection />
      <CareersCTASection />
    </main>
  );
}
