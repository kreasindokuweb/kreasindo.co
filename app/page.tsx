import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero"; // Import the Hero component
import Skills from "@/components/main/Skills";
import HeroContent from "@/components/sub/HeroContent"; // Import the Hero component


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero /> {/* Use Hero component */}
        <Skills />
        <Encryption />
      </div>
    </main>
  );
}

