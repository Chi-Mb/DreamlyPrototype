import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f051e] via-[#1a0b2e] to-[#0d4d5e] relative overflow-hidden flex flex-col items-center justify-center pb-20 px-6">
      {/* Animated gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 w-full max-w-md space-y-12 text-center"
      >
        {/* Moon Icon */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-6xl"
        >
          🌙
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tight text-white drop-shadow-lg font-['Outfit']">Dreamly</h1>
          <p className="text-xl text-white/70 font-light leading-relaxed">
            Better sleep starts tonight.
          </p>
        </div>

        <div className="space-y-3 pt-8">
          <Link href="/onboarding/goal">
            <Button className="w-full h-14 text-lg font-medium rounded-2xl bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white border-0 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/20">
              Sign Up
            </Button>
          </Link>
          <Link href="/home">
            <Button variant="outline" className="w-full h-14 text-lg font-medium rounded-2xl border-white/30 bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-[1.02] active:scale-[0.98]">
              Log In
            </Button>
          </Link>
        </div>

        <Link href="#" className="text-sm text-white/50 hover:text-white/70 transition-colors pt-4">
          Learn More
        </Link>
      </motion.div>
    </div>
  );
}