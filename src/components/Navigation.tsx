import { Music2, BarChart3, Search, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Music2 className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Swarlipi</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild className="gap-2">
              <Link to="/dashboard">
                <BarChart3 className="w-4 h-4" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" asChild className="gap-2">
              <Link to="/search">
                <Search className="w-4 h-4" />
                Search
              </Link>
            </Button>
            <Button variant="ghost" asChild className="gap-2">
              <Link to="/player">
                <Music className="w-4 h-4" />
                Player
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
