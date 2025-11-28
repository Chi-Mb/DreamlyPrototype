import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function OnboardingGoal() {
  const [bedTime, setBedTime] = useState("22:00");
  const [wakeTime, setWakeTime] = useState("06:00");
  const [sleepGoal, setSleepGoal] = useState(8);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f051e] via-[#1a0b2e] to-[#0d4d5e] flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white font-['Outfit']">Let's set your sleep goal.</h1>
          <p className="text-white/60">Help us understand your ideal sleep schedule</p>
        </div>

        {/* Moon Illustration */}
        <div className="flex justify-center text-8xl opacity-80">🌙</div>

        <div className="space-y-6 bg-white/5 rounded-3xl p-8 backdrop-blur-md border border-white/10">
          {/* Sleep Duration */}
          <div className="space-y-3">
            <label className="text-white font-medium">Sleep Duration Goal</label>
            <div className="flex items-center justify-center gap-4">
              <button onClick={() => setSleepGoal(Math.max(4, sleepGoal - 0.5))} className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20">−</button>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">{sleepGoal}</div>
              <button onClick={() => setSleepGoal(Math.min(12, sleepGoal + 0.5))} className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20">+</button>
            </div>
            <p className="text-center text-white/50 text-sm">hours per night</p>
          </div>

          {/* Bedtime */}
          <div className="space-y-2">
            <label className="text-white font-medium">Bedtime</label>
            <input 
              type="time" 
              value={bedTime} 
              onChange={(e) => setBedTime(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40"
            />
          </div>

          {/* Wake Time */}
          <div className="space-y-2">
            <label className="text-white font-medium">Wake Time</label>
            <input 
              type="time" 
              value={wakeTime} 
              onChange={(e) => setWakeTime(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40"
            />
          </div>
        </div>

        <Link href="/onboarding/windup">
          <Button className="w-full h-14 text-lg font-medium rounded-2xl bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white border-0 transition-all">
            Continue
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}