import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const MidiPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="player" className="min-h-screen py-20 px-4 bg-background flex items-center">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">MIDI Player</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Play and listen to bandish compositions
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-elegant">
          <CardHeader className="bg-gradient-hero text-primary-foreground rounded-t-lg">
            <CardTitle className="text-2xl">Now Playing</CardTitle>
            <p className="text-lg opacity-90">Piya Bin Nahi Aavat Chain - Raag Yaman</p>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Progress Bar */}
            <div className="mb-6">
              <Slider
                value={[progress]}
                onValueChange={(value) => setProgress(value[0])}
                max={100}
                step={1}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>0:00</span>
                <span>3:45</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <Button variant="outline" size="icon" className="rounded-full">
                <SkipBack className="w-5 h-5" />
              </Button>
              
              <Button 
                size="icon" 
                className="rounded-full w-14 h-14"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-1" />
                )}
              </Button>
              
              <Button variant="outline" size="icon" className="rounded-full">
                <SkipForward className="w-5 h-5" />
              </Button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-3 max-w-xs mx-auto">
              <Volume2 className="w-5 h-5 text-muted-foreground" />
              <Slider
                value={[volume]}
                onValueChange={(value) => setVolume(value[0])}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground w-12 text-right">{volume}%</span>
            </div>

            {/* Track Info */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Raag</p>
                  <p className="font-semibold text-primary">Yaman</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Taal</p>
                  <p className="font-semibold">Teentaal</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Composer</p>
                  <p className="font-semibold">Amir Khusro</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Style</p>
                  <p className="font-semibold">Khayal</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
