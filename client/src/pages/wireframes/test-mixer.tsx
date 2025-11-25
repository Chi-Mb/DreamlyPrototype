import WireframeLayout from "@/components/wireframe-layout";
import { Link } from "wouter";
import { Play, Trees, CloudRain, Coffee } from "lucide-react";

export default function TestMixer() {
  return (
    <WireframeLayout>
      <div className="relative w-full max-w-md mx-auto">
        {/* Retro Overlay Elements */}
        <div className="mb-8 flex justify-between items-center font-['VT323'] text-2xl text-blue-300">
          <Link href="/wireframes/test/player">Back</Link>
          <div className="bg-[#1a1a1a] border border-[#333] px-4 py-2 rounded">
             <span className="text-white">UI score: 6 / 6</span>
          </div>
        </div>

        {/* The Prototype Content - Mixer */}
        <div className="bg-[#0a0a12] p-6 rounded-xl border border-white/10 opacity-90">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 space-y-6">
             <div className="flex justify-between items-center">
               <h3 className="text-white font-bold text-lg">Sleep mix</h3>
               <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-3 h-3 text-white fill-current ml-0.5" />
               </div>
             </div>

             <div className="space-y-6">
                {/* Row 1 */}
                <div className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-white text-indigo-900 flex items-center justify-center">
                     <Trees className="w-4 h-4" />
                   </div>
                   <div className="flex-1 h-1 bg-white/10 rounded-full">
                      <div className="w-[70%] h-full bg-primary relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
                      </div>
                   </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-white/10 text-white/60 flex items-center justify-center">
                     <CloudRain className="w-4 h-4" />
                   </div>
                   <div className="flex-1 h-1 bg-white/10 rounded-full">
                      <div className="w-[40%] h-full bg-primary relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg border-2 border-white" />
                      </div>
                   </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-white/10 text-white/60 flex items-center justify-center">
                     <Coffee className="w-4 h-4" />
                   </div>
                   <div className="flex-1 h-1 bg-white/10 rounded-full">
                      <div className="w-[20%] h-full bg-primary relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg border-2 border-white" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-8 font-['VT323'] text-2xl text-blue-300">
          <Link href="/home">Finish Testing</Link>
        </div>
      </div>
    </WireframeLayout>
  );
}