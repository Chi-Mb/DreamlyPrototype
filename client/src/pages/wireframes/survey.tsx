import WireframeLayout from "@/components/wireframe-layout";

export default function SurveyPage() {
  return (
    <WireframeLayout>
      <div className="bg-[#111] border-2 border-[#333] p-6 rounded-sm shadow-[0_0_10px_rgba(0,0,0,0.5)] font-['VT323'] text-2xl tracking-wide leading-relaxed text-[#e0e0e0]">
        <h2 className="text-3xl mb-6 text-white uppercase border-b-2 border-[#333] pb-2">Survey Results:</h2>
        
        <ul className="space-y-6 list-none">
          <li className="flex gap-3">
            <span className="text-blue-400">-</span>
            <span>
              <span className="text-white font-bold">85%</span> of the respondents have trouble falling asleep every night
            </span>
          </li>
          
          <li className="flex gap-3">
            <span className="text-blue-400">-</span>
            <span>
              <span className="text-white font-bold">70%</span> of the respondents always bring their smartphone to the bedroom at night
            </span>
          </li>
          
          <li className="flex gap-3">
            <span className="text-blue-400">-</span>
            <span>
              <span className="text-white font-bold">90%</span> of respondents are counting sheep to fall asleep
            </span>
          </li>
        </ul>
      </div>
    </WireframeLayout>
  );
}