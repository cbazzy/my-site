"use client";
import Image from "next/image";
import Particle from "./components/particles";
import Welcome from "./components/welcome";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center animate-fade">
      <div className="desktop:pb-40 items-center flex flex-col">
        <Welcome />
      </div>
      <Particle />
    </main>
  );
}
