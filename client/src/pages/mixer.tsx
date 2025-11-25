import { useState } from "react";
import { Link } from "wouter";
import { X, Play, CloudRain, Wind, Music, Trees, Coffee } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function MixerPage() {
  const [levels, setLevels] = useState({
    nature: [60],
    rain: [30],
    cafe: [0],
    white: [20]
  });

  const handleLevelChange = (key: keyof typeof levels, val: number[]) => {
    setLevels((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div className="min-h-screen bg-background p-6 pt-8 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Sleep Mix</h1>
        <Link href="/home">
          <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10 text-white">
            <X className="w-6 h-6" />
          </Button>
        </Link>
      </div>

      <div className="flex-1 space-y-6">
        {/* Card */}
        <div className="bg-card/50 border border-white/5 rounded-3xl p-6 space-y-8 backdrop-blur-md">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-white">Custom Mix</h2>
              <p className="text-muted-foreground text-sm">Creating your atmosphere</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Play className="w-5 h-5 fill-current ml-1" />
            </div>
          </div>

          <div className="space-y-8">
            {/* Trees */}
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${levels.nature[0] > 0 ? 'bg-white text-background' : 'bg-white/10 text-white/40'}`}>
                <Trees className="w-5 h-5" />
              </div>
              <Slider 
                value={levels.nature} 
                onValueChange={(v) => handleLevelChange('nature', v)}
                max={100} 
                className="flex-1" 
              />
            </div>

            {/* Rain */}
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${levels.rain[0] > 0 ? 'bg-white text-background' : 'bg-white/10 text-white/40'}`}>
                <CloudRain className="w-5 h-5" />
              </div>
              <Slider 
                value={levels.rain} 
                onValueChange={(v) => handleLevelChange('rain', v)}
                max={100} 
                className="flex-1" 
              />
            </div>

             {/* Cafe */}
             <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${levels.cafe[0] > 0 ? 'bg-white text-background' : 'bg-white/10 text-white/40'}`}>
                <Coffee className="w-5 h-5" />
              </div>
              <Slider 
                value={levels.cafe} 
                onValueChange={(v) => handleLevelChange('cafe', v)}
                max={100} 
                className="flex-1" 
              />
            </div>

            {/* Wind */}
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${levels.white[0] > 0 ? 'bg-white text-background' : 'bg-white/10 text-white/40'}`}>
                <Wind className="w-5 h-5" />
              </div>
              <Slider 
                value={levels.white} 
                onValueChange={(v) => handleLevelChange('white', v)}
                max={100} 
                className="flex-1" 
              />
            </div>
          </div>
        </div>
        
        {/* Presets */}
        <div>
           <h3 className="text-white font-medium mb-4">Presets</h3>
           <div className="grid grid-cols-2 gap-4">
             <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer">
               <div className="mb-2 text-2xl">🌧️</div>
               <div className="text-white font-medium">Rainy Porch</div>
             </div>
             <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer">
               <div className="mb-2 text-2xl">🧘</div>
               <div className="text-white font-medium">Zen Garden</div>
             </div>
           </div>
        </div>
      </div>

      <div className="mt-4">
        <Button className="w-full h-14 text-lg rounded-2xl font-medium shadow-lg shadow-primary/20">
          Save to Library
        </Button>
      </div>
    </div>
  );
}