import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-background relative overflow-hidden flex flex-col items-center justify-end pb-20 px-6">
      {/* Abstract Background Waves */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-primary/20 to-transparent opacity-50 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-900/50 rounded-full blur-[100px]" />
        
        <svg className="absolute bottom-0 left-0 w-full h-[50vh] text-white/5" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-[40vh] text-white/5 translate-y-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
           <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 w-full max-w-md space-y-8 text-center"
      >
        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg">Sleepify</h1>
          <p className="text-lg text-white/60 font-light">
            The app that will help you to have a better sleep
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <Link href="/home">
            <Button className="w-full h-14 text-lg font-medium rounded-2xl bg-white/10 hover:bg-white/20 text-white border-0 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]">
              Log In
            </Button>
          </Link>
          <Link href="/home">
            <Button variant="outline" className="w-full h-14 text-lg font-medium rounded-2xl border-white/20 bg-transparent hover:bg-white/5 text-white transition-all hover:scale-[1.02] active:scale-[0.98]">
              Sign Up
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}