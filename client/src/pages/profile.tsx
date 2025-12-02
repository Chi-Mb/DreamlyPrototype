import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, BarChart3, Home, User, Settings, Bell, Shield, LogOut, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import noelleProfile from "@/assets/noelle-profile.png";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background pb-24 font-sans flex flex-col">
      {/* Header */}
      <div className="p-6 pt-12 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white font-serif tracking-tight">Profile</h1>
        <Button size="icon" variant="ghost" className="text-white rounded-full hover:bg-white/10">
          <Settings className="w-6 h-6" />
        </Button>
      </div>

      <div className="px-6 flex-1 space-y-8">
        {/* Profile Card */}
        <div className="flex flex-col items-center space-y-4 pt-4">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-purple-400 p-1">
              <Avatar className="w-full h-full border-4 border-background">
                <AvatarImage src={noelleProfile} />
                <AvatarFallback>NH</AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-background" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Noelle Hill</h2>
            <p className="text-white/50">Premium Member</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex justify-between bg-white/5 rounded-2xl p-6 border border-white/5">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">28</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Nights</p>
          </div>
          <div className="w-[1px] bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">7.5h</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Avg Sleep</p>
          </div>
          <div className="w-[1px] bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">92</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Score</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-card/30 hover:bg-card/50 transition-colors cursor-pointer group">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                 <Bell className="w-5 h-5" />
               </div>
               <span className="text-white font-medium">Notifications</span>
             </div>
             <Switch />
          </div>

          <div className="flex items-center justify-between p-4 rounded-2xl bg-card/30 hover:bg-card/50 transition-colors cursor-pointer group">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                 <Shield className="w-5 h-5" />
               </div>
               <span className="text-white font-medium">Privacy & Data</span>
             </div>
             <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
          </div>

           <div className="flex items-center justify-between p-4 rounded-2xl bg-card/30 hover:bg-card/50 transition-colors cursor-pointer group">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                 <LogOut className="w-5 h-5" />
               </div>
               <span className="text-red-400 font-medium">Log Out</span>
             </div>
          </div>
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
          <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-white transition-colors cursor-pointer">
            <BarChart3 className="w-6 h-6" />
            <span className="text-[10px] font-medium">Stats</span>
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex flex-col items-center gap-1 text-primary cursor-pointer">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-medium">Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
}