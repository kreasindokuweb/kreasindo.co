import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero"; // Import the Hero component
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";



export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero /> {/* Use Hero component */}
        <Skills />
        {/* <Encryption /> */}
        <Projects />
      </div>
    </main>
  );
}

