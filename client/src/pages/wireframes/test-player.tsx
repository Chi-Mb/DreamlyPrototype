import WireframeLayout from "@/components/wireframe-layout";
import { Link } from "wouter";
import { Play, SkipBack, SkipForward } from "lucide-react";

export default function TestPlayer() {
  return (
    <WireframeLayout>
      <div className="relative w-full max-w-md mx-auto">
        {/* Retro Overlay Elements */}
        <div className="mb-8 flex justify-between items-center font-['VT323'] text-2xl text-blue-300">
          <Link href="/wireframes/test/list">Back</Link>
          <div className="bg-[#1a1a1a] border border-[#333] px-4 py-2 rounded">
             <span className="text-white">UI score: 4 / 6</span>
          </div>
        </div>

        {/* The Prototype Content - Player */}
        <div className="bg-[#0a0a12] p-6 rounded-xl border border-white/10 opacity-90">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 flex flex-col items-center text-center space-y-6">
            <div className="space-y-1">
              <h3 className="text-white font-bold text-xl">Moon night</h3>
              <p className="text-white/50 text-xs">7 Day Audio and Video Series</p>
            </div>

            {/* Progress Bar */}
            <div className="w-full space-y-2">
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-primary relative">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-white/40 font-mono">
                <span>46:03</span>
                <span>92:58</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-8">
               <SkipBack className="w-6 h-6 text-white/70" />
               <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                 <Play className="w-6 h-6 text-white fill-current ml-1" />
               </div>
               <SkipForward className="w-6 h-6 text-white/70" />
            </div>
          </div>
        </div>

        <div className="mt-8 font-['VT323'] text-2xl text-blue-300">
          <Link href="/wireframes/test/mixer">Next</Link>
        </div>
      </div>
    </WireframeLayout>
  );
}