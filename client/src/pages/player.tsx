import { useState } from "react";
import { Link, useRoute } from "wouter";
import { ArrowLeft, MoreVertical, Play, Pause, SkipBack, SkipForward, Heart, Share2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const SLEEPCASTS: Record<string, { title: string; subtitle: string; duration: string; gradient: string }> = {
  "1": { title: "Moon Night", subtitle: "7 Day Audio Series", duration: "92:58", gradient: "from-indigo-500 to-purple-700" },
  "2": { title: "Rain Forest", subtitle: "Nature Sounds", duration: "120:42", gradient: "from-emerald-500 to-teal-700" },
  "3": { title: "Ocean Waves", subtitle: "White Noise", duration: "87:15", gradient: "from-blue-500 to-cyan-700" },
  "4": { title: "Bedtime Stories", subtitle: "Narrated Tales", duration: "45:30", gradient: "from-purple-500 to-pink-700" },
  "5": { title: "Guided Sleep", subtitle: "Meditation Guide", duration: "62:15", gradient: "from-purple-500 to-indigo-700" },
  "6": { title: "Deep Sleep", subtitle: "Sleep Therapy", duration: "71:20", gradient: "from-teal-500 to-cyan-700" },
};

export default function PlayerPage() {
  const [, params] = useRoute("/player/:id");
  const castId = params?.id || "1";
  const sleepcast = SLEEPCASTS[castId] || SLEEPCASTS["1"];
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState([33]);

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60vh] bg-primary/10 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="p-6 pt-8 flex justify-between items-center z-10">
        <Link href="/home">
          <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10 text-white">
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </Link>
        <span className="text-sm font-medium tracking-widest uppercase text-white/50">Now Playing</span>
        <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10 text-white">
          <MoreVertical className="w-6 h-6" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-8 pb-12 z-10">
        {/* Art */}
        <div className={`w-full aspect-square rounded-[2.5rem] bg-gradient-to-br ${sleepcast.gradient} shadow-2xl shadow-primary/20 mb-12 relative overflow-hidden group`}>
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Title Info */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{sleepcast.title}</h1>
            <p className="text-white/60 text-lg">{sleepcast.subtitle}</p>
          </div>
          <Button size="icon" variant="ghost" className="text-white/40 hover:text-primary transition-colors">
            <Heart className="w-7 h-7" />
          </Button>
        </div>

        {/* Progress */}
        <div className="space-y-4 mb-10">
          <Slider 
            value={progress} 
            onValueChange={setProgress} 
            max={100} 
            step={1} 
            className="[&>.absolute]:h-1.5 [&>span:first-child]:h-1.5 [&>span:first-child]:bg-white/20 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=slider]]:bg-white [&_[role=slider]]:border-primary [&_[role=slider]]:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          />
          <div className="flex justify-between text-xs font-mono text-white/40">
            <span>46:03</span>
            <span>{sleepcast.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center px-4">
          <Button size="icon" variant="ghost" className="text-white/60 hover:text-white w-12 h-12">
            <Share2 className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-6">
            <Button size="icon" variant="ghost" className="text-white hover:text-primary transition-colors">
              <SkipBack className="w-8 h-8 fill-current" />
            </Button>
            
            <Button 
              size="icon" 
              className="w-20 h-20 rounded-full bg-white text-background hover:bg-white/90 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current ml-0.5" />
              ) : (
                <Play className="w-8 h-8 fill-current ml-1" />
              )}
            </Button>
            
            <Button size="icon" variant="ghost" className="text-white hover:text-primary transition-colors">
              <SkipForward className="w-8 h-8 fill-current" />
            </Button>
          </div>

          <Link href="/mixer">
             <Button size="icon" variant="ghost" className="text-white/60 hover:text-white w-12 h-12">
              <div className="flex gap-0.5 items-end h-5">
                 <div className="w-1 bg-current h-3 rounded-full animate-[bounce_1s_infinite]" />
                 <div className="w-1 bg-current h-5 rounded-full animate-[bounce_1.2s_infinite_0.1s]" />
                 <div className="w-1 bg-current h-2 rounded-full animate-[bounce_0.8s_infinite_0.2s]" />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}