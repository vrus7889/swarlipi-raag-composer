import { useState } from "react";
import { Search, Music2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const bandishData = [
  { id: 1, name: "Piya Bin Nahi Aavat Chain", raag: "Yaman", taal: "Teentaal", composer: "Amir Khusro", style: "Khayal" },
  { id: 2, name: "Albela Sajan Aayo Re", raag: "Bhairavi", taal: "Teentaal", composer: "Pt. Jasraj", style: "Bhajan" },
  { id: 3, name: "Kahe Man Ki Ankhiyan", raag: "Bhairav", taal: "Jhaptaal", composer: "Unknown", style: "Khayal" },
  { id: 4, name: "Rang De Chunariya", raag: "Todi", taal: "Roopak", composer: "Tansen", style: "Tarana" },
  { id: 5, name: "More Ghar Aaye Ram", raag: "Puriya", taal: "Ektaal", composer: "Amir Khusro", style: "Khayal" },
  { id: 6, name: "Darbari Alap", raag: "Darbari", taal: "Teentaal", composer: "Tansen", style: "Alap" },
];

export const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRaag, setSelectedRaag] = useState("all");
  const [selectedTaal, setSelectedTaal] = useState("all");

  const filteredBandishes = bandishData.filter((bandish) => {
    const matchesSearch = bandish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bandish.composer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRaag = selectedRaag === "all" || bandish.raag === selectedRaag;
    const matchesTaal = selectedTaal === "all" || bandish.taal === selectedTaal;
    return matchesSearch && matchesRaag && matchesTaal;
  });

  return (
    <section id="search" className="min-h-screen py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Search Bandishes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find compositions by name, raag, taal, composer, or style
          </p>
        </div>

        <Card className="mb-8 shadow-card">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by name or composer..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedRaag} onValueChange={setSelectedRaag}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Filter by Raag" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Raagas</SelectItem>
                  <SelectItem value="Yaman">Yaman</SelectItem>
                  <SelectItem value="Bhairav">Bhairav</SelectItem>
                  <SelectItem value="Bhairavi">Bhairavi</SelectItem>
                  <SelectItem value="Todi">Todi</SelectItem>
                  <SelectItem value="Puriya">Puriya</SelectItem>
                  <SelectItem value="Darbari">Darbari</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedTaal} onValueChange={setSelectedTaal}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Filter by Taal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Taals</SelectItem>
                  <SelectItem value="Teentaal">Teentaal</SelectItem>
                  <SelectItem value="Jhaptaal">Jhaptaal</SelectItem>
                  <SelectItem value="Ektaal">Ektaal</SelectItem>
                  <SelectItem value="Roopak">Roopak</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBandishes.map((bandish, index) => (
            <Card 
              key={bandish.id} 
              className="shadow-card hover:shadow-elegant transition-shadow duration-300 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Music2 className="w-8 h-8 text-primary" />
                  <Badge variant="secondary">{bandish.style}</Badge>
                </div>
                <CardTitle className="text-xl mt-2">{bandish.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Raag:</span>
                    <span className="font-medium text-primary">{bandish.raag}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taal:</span>
                    <span className="font-medium">{bandish.taal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Composer:</span>
                    <span className="font-medium">{bandish.composer}</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
