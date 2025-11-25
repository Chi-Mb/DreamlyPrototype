import { Link } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Moon, BarChart3, Home, User, Clock, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const WEEKLY_DATA = [
  { day: "Mon", hours: 6.5 },
  { day: "Tue", hours: 7.2 },
  { day: "Wed", hours: 5.8 },
  { day: "Thu", hours: 8.1 },
  { day: "Fri", hours: 7.5 },
  { day: "Sat", hours: 9.2 },
  { day: "Sun", hours: 8.5 },
];

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-background pb-24 font-sans flex flex-col">
      {/* Header */}
      <div className="p-6 pt-12">
        <h1 className="text-3xl font-bold text-white font-serif tracking-tight">Sleep Stats</h1>
        <p className="text-muted-foreground">Your weekly overview</p>
      </div>

      <div className="px-6 space-y-6 flex-1">
        {/* Main Chart */}
        <div className="bg-card/50 border border-white/5 rounded-3xl p-6 backdrop-blur-md">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-white font-medium">Weekly Sleep</h3>
             <span className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded-full">Avg: 7.5h</span>
          </div>
          
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={WEEKLY_DATA}>
                <XAxis 
                  dataKey="day" 
                  stroke="rgba(255,255,255,0.3)" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <Tooltip 
                   cursor={{fill: 'rgba(255,255,255,0.05)'}}
                   contentStyle={{ 
                     backgroundColor: '#1a0b2e', 
                     border: '1px solid rgba(255,255,255,0.1)', 
                     borderRadius: '12px' 
                   }}
                />
                <Bar 
                  dataKey="hours" 
                  fill="hsl(var(--primary))" 
                  radius={[4, 4, 4, 4]} 
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detail Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white/5 border-white/5 p-4 rounded-2xl space-y-2 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Time in Bed</p>
              <p className="text-xl font-bold text-white">8h 15m</p>
            </div>
          </Card>

          <Card className="bg-white/5 border-white/5 p-4 rounded-2xl space-y-2 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Avg Heart Rate</p>
              <p className="text-xl font-bold text-white">58 bpm</p>
            </div>
          </Card>
        </div>

        {/* Insight */}
        <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-white/5 p-6 rounded-3xl">
           <h3 className="text-white font-medium mb-2">Sleep Insight</h3>
           <p className="text-sm text-white/70 leading-relaxed">
             You slept <span className="text-primary font-bold">45 minutes more</span> than your weekly average last night. Great job maintaining your schedule!
           </p>
        </div>
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
          <div className="flex flex-col items-center gap-1 text-primary cursor-pointer">
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