import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const BADGES = [
  { id: 1, emoji: "🔥", name: "7-day streak", unlocked: true, active: true },
  { id: 2, emoji: "😴", name: "Early Bird", unlocked: true, active: false },
  { id: 3, emoji: "⭐", name: "Perfect Week", unlocked: true, active: false },
  { id: 4, emoji: "🌙", name: "Night Owl", unlocked: false, active: false },
  { id: 5, emoji: "💪", name: "30-day Streak", unlocked: false, active: false },
  { id: 6, emoji: "🎯", name: "Goal Master", unlocked: false, active: false },
];

export default function Badges() {
  return (
    <div className="min-h-screen bg-background p-6 pt-12 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Badges & Streaks</h1>
        <Button size="icon" variant="ghost" className="text-white/50 hover:text-white">
          <X className="w-6 h-6" />
        </Button>
      </div>

      <div className="space-y-8 flex-1">
        {/* Active Streak */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-gradient-to-br from-purple-500/30 to-teal-500/30 border border-primary/50 p-8 rounded-3xl text-center space-y-2 shadow-[0_0_40px_-10px_rgba(167,139,250,0.3)]"
        >
          <div className="text-6xl">🔥</div>
          <h2 className="text-2xl font-bold text-white">7-Day Streak</h2>
          <p className="text-white/70">Keep it up! You're doing amazing!</p>
        </motion.div>

        {/* All Badges Grid */}
        <div>
          <h3 className="text-white font-medium mb-4">Your Achievements</h3>
          <div className="grid grid-cols-3 gap-4">
            {BADGES.map((badge, i) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-4 rounded-2xl text-center transition-all ${
                  badge.unlocked 
                    ? 'bg-white/10 border border-white/20 cursor-pointer hover:bg-white/20' 
                    : 'bg-white/5 border border-white/5 opacity-50'
                }`}
              >
                <div className="text-3xl mb-2">{badge.emoji}</div>
                <p className="text-xs text-white/70 font-medium">{badge.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}