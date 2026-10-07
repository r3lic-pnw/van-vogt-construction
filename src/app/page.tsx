import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex-1 text-center">
        <p>Test content for the home page.</p>
      </main>
    </>
  );
}
