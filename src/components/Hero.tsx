import { Music2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <Music2 className="w-20 h-20" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Swarlipi
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
          Explore and analyze classical Indian music compositions with comprehensive visualizations, search, and playback
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/dashboard")}
            className="text-lg"
          >
            View Statistics
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/search")}
            className="text-lg bg-white/10 hover:bg-white/20 border-white/30"
          >
            Search Bandishes
          </Button>
        </div>
      </div>
    </section>
  );
};
