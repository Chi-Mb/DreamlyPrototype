import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function WireframeLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const steps = [
    { name: "EMPATHIZE", path: "/wireframes/survey" },
    { name: "DEFINE", path: "/wireframes/interview" },
    { name: "IDEATE", path: "/wireframes/ideate" },
    { name: "PROTOTYPE", path: "/home" },
    { name: "TEST", path: "/wireframes/test/list" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-vt323 flex flex-col items-center p-4 font-['VT323'] text-xl">
      {/* Header Navigation */}
      <div className="w-full max-w-md mb-8 bg-[#1a1a1a] p-2 border-2 border-[#333]">
         <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center font-bold text-lg tracking-wider">
            {steps.map((step) => (
              <Link key={step.name} href={step.path}>
                <span 
                  className={cn(
                    "cursor-pointer hover:text-blue-400 transition-colors",
                    location === step.path ? "bg-blue-900 text-white px-1" : "text-gray-400"
                  )}
                >
                  {step.name}
                </span>
              </Link>
            ))}
         </div>
      </div>

      {/* CRT Screen Effect Container */}
      <div className="w-full max-w-md relative">
         {children}
      </div>
      
      {/* Navigation back to High Fi */}
      <Link href="/home">
        <div className="fixed bottom-4 right-4 opacity-50 hover:opacity-100 cursor-pointer text-xs font-sans bg-white/10 px-3 py-1 rounded-full transition-all">
          Switch to High-Fi
        </div>
      </Link>
    </div>
  );
}