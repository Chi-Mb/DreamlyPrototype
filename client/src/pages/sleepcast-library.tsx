import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, BarChart3, Home, User, Search, Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SLEEPCASTS = [
  { id: 1, title: "Moon Night", category: "sleepcasts", duration: "180 mins", emoji: "🌙" },
  { id: 2, title: "Rain Forest", category: "sleepcasts", duration: "240 mins", emoji: "🌧️" },
  { id: 3, title: "Ocean Waves", category: "sleepcasts", duration: "200 mins", emoji: "🌊" },
  { id: 4, title: "Bedtime Stories", category: "stories", duration: "15 mins", emoji: "📖" },
  { id: 5, title: "Guided Sleep", category: "meditations", duration: "20 mins", emoji: "🧘" },
  { id: 6, title: "Deep Sleep", category: "meditations", duration: "25 mins", emoji: "✨" },
];

export default function SleepcastLibrary() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("sleepcasts");

  const filtered = SLEEPCASTS.filter(cast => 
    cast.category === activeTab && cast.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-24 font-sans flex flex-col">
      {/* Header */}
      <div className="p-6 pt-12">
        <h1 className="text-3xl font-bold text-white font-serif tracking-tight">Sleepcasts</h1>
        <p className="text-muted-foreground">Find a calming track…</p>
      </div>

      <div className="px-6 flex-1 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
          <input 
            type="text"
            placeholder="Find a calming track…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50"
          />
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/5 p-1 rounded-xl border border-white/10">
            <TabsTrigger value="sleepcasts" className="rounded-lg">Sleepcasts</TabsTrigger>
            <TabsTrigger value="stories" className="rounded-lg">Stories</TabsTrigger>
            <TabsTrigger value="meditations" className="rounded-lg">Meditations</TabsTrigger>
          </TabsList>

          <TabsContent value="sleepcasts" className="space-y-4 mt-6">
            {filtered.map(cast => (
              <Link key={cast.id} href={`/player/${cast.id}`}>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 hover:bg-card border border-white/5 transition-colors cursor-pointer group">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/30 to-teal-500/30 flex items-center justify-center text-3xl group-hover:from-purple-500/50 group-hover:to-teal-500/50 transition-colors">
                    {cast.emoji}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{cast.title}</h4>
                    <p className="text-sm text-muted-foreground">{cast.duration}</p>
                  </div>
                  <Play className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity fill-current" />
                </div>
              </Link>
            ))}
          </TabsContent>

          <TabsContent value="stories" className="space-y-4 mt-6">
            {filtered.map(cast => (
              <Link key={cast.id} href={`/player/${cast.id}`}>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 hover:bg-card border border-white/5 transition-colors cursor-pointer group">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/30 to-teal-500/30 flex items-center justify-center text-3xl group-hover:from-purple-500/50 group-hover:to-teal-500/50 transition-colors">
                    {cast.emoji}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{cast.title}</h4>
                    <p className="text-sm text-muted-foreground">{cast.duration}</p>
                  </div>
                  <Play className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity fill-current" />
                </div>
              </Link>
            ))}
          </TabsContent>

          <TabsContent value="meditations" className="space-y-4 mt-6">
            {filtered.map(cast => (
              <Link key={cast.id} href={`/player/${cast.id}`}>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 hover:bg-card border border-white/5 transition-colors cursor-pointer group">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/30 to-teal-500/30 flex items-center justify-center text-3xl group-hover:from-purple-500/50 group-hover:to-teal-500/50 transition-colors">
                    {cast.emoji}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{cast.title}</h4>
                    <p className="text-sm text-muted-foreground">{cast.duration}</p>
                  </div>
                  <Play className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity fill-current" />
                </div>
              </Link>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-white/5 p-4 pb-8 px-8 flex justify-between items-center z-50">
        <Link href="/home">
          <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-white transition-colors cursor-pointer">
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
            <span className="text-[10px] font-medium">Insights</span>
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