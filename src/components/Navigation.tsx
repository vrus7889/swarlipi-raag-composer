import { Music2, BarChart3, Search, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Music2 className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Swarlipi</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" onClick={() => scrollToSection("dashboard")} className="gap-2">
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("search")} className="gap-2">
              <Search className="w-4 h-4" />
              Search
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("player")} className="gap-2">
              <Music className="w-4 h-4" />
              Player
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
