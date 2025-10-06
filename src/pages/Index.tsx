import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";
import { SearchSection } from "@/components/SearchSection";
import { MidiPlayer } from "@/components/MidiPlayer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Dashboard />
      <SearchSection />
      <MidiPlayer />
    </div>
  );
};

export default Index;
