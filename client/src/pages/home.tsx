import { Link } from "wouter";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Moon, BarChart3, Home, User } from "lucide-react";

const SLEEPCASTS = [
  { id: 1, title: "Moon night", subtitle: "7 Day Audio Series", duration: "180 mins", color: "from-indigo-900 to-purple-900" },
  { id: 2, title: "Rain forest", subtitle: "Nature Sounds", duration: "240 mins", color: "from-emerald-900 to-teal-900" },
  { id: 3, title: "Deep Ocean", subtitle: "White Noise", duration: "120 mins", color: "from-blue-900 to-cyan-900" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pb-24 font-sans">
      {/* Header */}
      <div className="p-6 pt-12 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif tracking-tight">Dreamly</h1>
          <p className="text-muted-foreground">Welcome back, Dreamer</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-400 border-2 border-white/10" />
      </div>

      {/* Sleep Score - Pixel Art Style Nod */}
      <div className="px-6 mb-8">
        <div className="bg-secondary/50 border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
          <div className="relative z-10 flex justify-between items-end">
            <div>
              <p className="font-mono text-xs text-primary mb-1 tracking-widest uppercase">Sleep Score</p>
              <h2 className="text-4xl font-mono text-white">85<span className="text-lg text-muted-foreground">/100</span></h2>
            </div>
            <div className="h-10 flex items-end gap-1">
              {[40, 60, 30, 80, 50, 70].map((h, i) => (
                <div key={i} className="w-2 bg-primary/50 rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sleepcast Section */}
      <div className="space-y-4">
        <div className="px-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Sleepcast</h2>
          <Link href="/sleepcasts">
            <span className="text-xs font-mono text-muted-foreground cursor-pointer hover:text-primary transition-colors">SEE ALL</span>
          </Link>
        </div>

        <ScrollArea className="w-full whitespace-nowrap pl-6">
          <div className="flex w-max space-x-4 pb-4 pr-6">
            {SLEEPCASTS.map((cast) => (
              <Link key={cast.id} href={`/player/${cast.id}`}>
                <div className={`w-[280px] h-[320px] rounded-[2rem] bg-gradient-to-br ${cast.color} p-6 flex flex-col justify-between relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98] border border-white/5`}>
                  {/* Glow effect */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[60px] group-hover:bg-white/15 transition-colors" />
                  
                  <div className="relative z-10 mt-8 space-y-1">
                    <h3 className="text-3xl font-bold text-white leading-tight whitespace-normal">{cast.title}</h3>
                    <p className="text-white/60 text-sm">{cast.subtitle}</p>
                  </div>

                  <div className="relative z-10 flex justify-between items-end">
                    <span className="text-xs font-mono text-white/40">{cast.duration}</span>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors group-hover:scale-110">
                      <Play className="w-5 h-5 text-white group-hover:text-purple-900 fill-current ml-1 transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </div>

      {/* Recommended Section */}
      <div className="px-6 mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-white">Recommended for you</h2>
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 hover:bg-card border border-white/5 transition-colors cursor-pointer">
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center text-2xl">
               {i === 1 ? '🌧️' : '🎹'}
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">{i === 1 ? "Rainy Mood" : "Piano Dreams"}</h4>
                <p className="text-sm text-muted-foreground">15 mins • Calming</p>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                <Play className="w-3 h-3 text-white fill-current ml-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-white/5 p-4 pb-8 px-8 flex justify-between items-center z-50">
        <Link href="/home">
          <div className="flex flex-col items-center gap-1 text-primary cursor-pointer">
            <Home className="w-6 h-6" />
            <span className="text-[10px] font-medium">Home</span>
          </div>
        </Link>
        <Link href="/mixer">
          <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-white transition-colors cursor-pointer">
            <Moon className="w-6 h-6" />
            <span className="text-[10px] font-medium">Sleep</span>
          </div>
        </Link>
        <Link href="/stats">
          <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-white transition-colors cursor-pointer">
            <BarChart3 className="w-6 h-6" />
            <span className="text-[10px] font-medium">Stats</span>
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-white transition-colors cursor-pointer">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-medium">Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
}