import WireframeLayout from "@/components/wireframe-layout";
import { Link } from "wouter";
import { Play } from "lucide-react";

export default function TestList() {
  return (
    <WireframeLayout>
      <div className="relative w-full max-w-md mx-auto">
        {/* Retro Overlay Elements */}
        <div className="mb-8 flex justify-between items-center font-['VT323'] text-2xl text-blue-300">
          <span>Next</span>
          <div className="bg-[#1a1a1a] border border-[#333] px-4 py-2 rounded">
             <span className="text-white">UI score: 2 / 6</span>
          </div>
        </div>

        {/* The Prototype Content - Sleepcast List */}
        <div className="bg-[#0a0a12] p-4 rounded-xl border border-white/10 opacity-90">
          <div className="flex justify-between items-center mb-4 font-sans text-white">
            <h3 className="font-bold">Sleepcast</h3>
            <span className="text-xs text-white/50">SEE ALL</span>
          </div>
          
          <div className="flex gap-4 overflow-hidden">
            {/* Card 1 */}
            <div className="min-w-[160px] bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-4 flex flex-col gap-8">
               <div>
                 <h4 className="text-white font-bold text-lg leading-tight">Moon night</h4>
                 <p className="text-white/50 text-[10px]">7 Day Audio Series</p>
               </div>
               <div className="flex justify-between items-end">
                 <span className="text-white/40 text-[10px]">180 mins</span>
                 <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                   <Play className="w-3 h-3 text-white fill-current" />
                 </div>
               </div>
            </div>

            {/* Card 2 */}
            <div className="min-w-[160px] bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl p-4 flex flex-col gap-8">
               <div>
                 <h4 className="text-white font-bold text-lg leading-tight">Rain forest</h4>
                 <p className="text-white/50 text-[10px]">7 Day Audio Series</p>
               </div>
               <div className="flex justify-between items-end">
                 <span className="text-white/40 text-[10px]">240 mins</span>
                 <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                   <Play className="w-3 h-3 text-white fill-current" />
                 </div>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-8 font-['VT323'] text-2xl text-blue-300">
          <Link href="/wireframes/test/player">Next</Link>
        </div>
      </div>
    </WireframeLayout>
  );
}