import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function SmartAlarm() {
  const [wakeTime, setWakeTime] = useState("06:00");
  const [vibration, setVibration] = useState(true);
  const [fadeIn, setFadeIn] = useState(true);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f051e] via-[#1a0b2e] to-[#0d4d5e] flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white font-['Outfit']">Smart Alarm</h1>
          <p className="text-white/60">Wake during your lightest sleep phase</p>
        </div>

        <div className="text-6xl text-center">⏰</div>

        <div className="space-y-6 bg-white/5 rounded-3xl p-8 backdrop-blur-md border border-white/10">
          {/* Wake Time */}
          <div className="space-y-3">
            <label className="text-white font-medium">Target Wake Time</label>
            <input 
              type="time" 
              value={wakeTime} 
              onChange={(e) => setWakeTime(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-lg text-center"
            />
            <p className="text-sm text-white/50 text-center">Alarm will wake you within a 30-minute window</p>
          </div>

          {/* Vibration Toggle */}
          <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
            <span className="text-white font-medium">Gentle Vibration</span>
            <input 
              type="checkbox" 
              checked={vibration} 
              onChange={(e) => setVibration(e.target.checked)}
              className="w-5 h-5 rounded"
            />
          </label>

          {/* Fade-In Toggle */}
          <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
            <span className="text-white font-medium">Fade-In Sound</span>
            <input 
              type="checkbox" 
              checked={fadeIn} 
              onChange={(e) => setFadeIn(e.target.checked)}
              className="w-5 h-5 rounded"
            />
          </label>
        </div>

        <Button className="w-full h-14 text-lg font-medium rounded-2xl bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white border-0 transition-all">
          Set Alarm
        </Button>
      </motion.div>
    </div>
  );
}