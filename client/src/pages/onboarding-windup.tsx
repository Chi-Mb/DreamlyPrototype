import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Smartphone, BellOff, Wind, Music } from "lucide-react";

export default function OnboardingWindup() {
  const [screenDim, setScreenDim] = useState(true);
  const [muteDings, setMuteDings] = useState(true);
  const [breathing, setBreathing] = useState(true);
  const [soundscape, setSoundscape] = useState(true);
  const [windupDuration, setWindupDuration] = useState(20);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f051e] via-[#1a0b2e] to-[#0d4d5e] flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white font-['Outfit']">Create your wind-down routine.</h1>
          <p className="text-white/60">Customize how Dreamly prepares you for sleep</p>
        </div>

        <div className="space-y-6 bg-white/5 rounded-3xl p-8 backdrop-blur-md border border-white/10">
          {/* Screen Dimming */}
          <label className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
            <Smartphone className="w-6 h-6 text-purple-400" />
            <div className="flex-1">
              <p className="text-white font-medium">Screen Dimming</p>
              <p className="text-white/50 text-sm">Reduce blue light</p>
            </div>
            <input 
              type="checkbox" 
              checked={screenDim} 
              onChange={(e) => setScreenDim(e.target.checked)}
              className="w-5 h-5 rounded"
            />
          </label>

          {/* Notifications */}
          <label className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
            <BellOff className="w-6 h-6 text-purple-400" />
            <div className="flex-1">
              <p className="text-white font-medium">Mute Notifications</p>
              <p className="text-white/50 text-sm">No interruptions</p>
            </div>
            <input 
              type="checkbox" 
              checked={muteDings} 
              onChange={(e) => setMuteDings(e.target.checked)}
              className="w-5 h-5 rounded"
            />
          </label>

          {/* Breathing */}
          <label className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
            <Wind className="w-6 h-6 text-teal-400" />
            <div className="flex-1">
              <p className="text-white font-medium">Breathing Exercises</p>
              <p className="text-white/50 text-sm">Guided relaxation</p>
            </div>
            <input 
              type="checkbox" 
              checked={breathing} 
              onChange={(e) => setBreathing(e.target.checked)}
              className="w-5 h-5 rounded"
            />
          </label>

          {/* Soundscape */}
          <label className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
            <Music className="w-6 h-6 text-teal-400" />
            <div className="flex-1">
              <p className="text-white font-medium">Soundscapes</p>
              <p className="text-white/50 text-sm">Calming audio</p>
            </div>
            <input 
              type="checkbox" 
              checked={soundscape} 
              onChange={(e) => setSoundscape(e.target.checked)}
              className="w-5 h-5 rounded"
            />
          </label>

          {/* Duration */}
          <div className="space-y-3 pt-4">
            <label className="text-white font-medium">Wind-Down Duration</label>
            <select 
              value={windupDuration}
              onChange={(e) => setWindupDuration(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white"
            >
              <option value={10}>10 minutes</option>
              <option value={15}>15 minutes</option>
              <option value={20}>20 minutes</option>
              <option value={25}>25 minutes</option>
              <option value={30}>30 minutes</option>
            </select>
          </div>
        </div>

        <Link href="/home">
          <Button className="w-full h-14 text-lg font-medium rounded-2xl bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white border-0 transition-all">
            Finish Setup
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}