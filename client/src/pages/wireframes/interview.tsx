import WireframeLayout from "@/components/wireframe-layout";

export default function InterviewPage() {
  return (
    <WireframeLayout>
      <div className="bg-[#111] border-2 border-[#333] rounded-sm shadow-[0_0_10px_rgba(0,0,0,0.5)] font-['VT323'] text-2xl tracking-wide overflow-hidden">
        <div className="bg-[#222] p-2 border-b-2 border-[#333] text-white text-center uppercase tracking-widest text-lg">
          User interview transcript
        </div>
        
        <div className="p-4 space-y-6">
          {/* Question 1 */}
          <div className="flex justify-end pl-8">
             <div className="bg-blue-900/80 text-white p-3 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl relative">
                <p>Why do you say 'It doesn't matter how much sleep I get'?</p>
                <div className="absolute bottom-0 -right-2 w-4 h-4 bg-blue-900/80 [clip-path:polygon(0_0,0_100%,100%_0)]"></div>
             </div>
          </div>

          {/* Answer 1 */}
          <div className="flex justify-start pr-8">
             <div className="bg-[#2a2a2a] text-[#e0e0e0] p-3 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl relative border border-[#444]">
                <p>Because sometimes I can sleep for four hours and wake up feeling great and full of energy, or I can sleep for eight hours and still feel tired the next day.</p>
                <div className="absolute bottom-0 -left-2 w-4 h-4 bg-[#2a2a2a] [clip-path:polygon(100%_0,100%_100%,0_0)] border-t border-l border-[#444]"></div>
             </div>
          </div>

          {/* Question 2 */}
          <div className="flex justify-end pl-12">
             <div className="bg-blue-900/80 text-white p-3 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl relative">
                <p>How many hours of sleep did you get last night?</p>
                <div className="absolute bottom-0 -right-2 w-4 h-4 bg-blue-900/80 [clip-path:polygon(0_0,0_100%,100%_0)]"></div>
             </div>
          </div>

           {/* Answer 2 */}
           <div className="flex justify-start pr-8">
             <div className="bg-[#2a2a2a] text-[#e0e0e0] p-3 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl relative border border-[#444]">
                <p>I got about four hours of sleep last night. Which isn't much. But oddly enough, it doesn't seem to matter how much sleep I get.</p>
                <div className="absolute bottom-0 -left-2 w-4 h-4 bg-[#2a2a2a] [clip-path:polygon(100%_0,100%_100%,0_0)] border-t border-l border-[#444]"></div>
             </div>
          </div>
        </div>
      </div>
    </WireframeLayout>
  );
}