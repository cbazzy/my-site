"use client";
import Image from "next/image";
import Particle from "./components/particles";
import Welcome from "./components/welcome";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center animate-fade pb-32">
      <Welcome />
      <Particle />
    </main>
  );
}
