import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import ETLShowcase from "@/components/ETLShowcase";
import PowerBIContainer from "@/components/PowerBIContainer";
import Terminal from "@/components/Terminal";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero /><Metrics /><ETLShowcase /><PowerBIContainer /><Terminal />
      <footer className="py-12 text-center text-gray-700 text-[10px] uppercase tracking-[0.5em] bg-black border-t border-white/5">
        Protocol Terminated // 2026 // TRYN<span className="text-cyan-glow/50">SER</span>
      </footer>
    </main>
  );
}
