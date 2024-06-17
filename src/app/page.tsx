"use client";
import Image from "next/image";
import Particle from "./components/particles";
import Welcome from "./components/welcome";

export default function Home() {
  return (
    <main className="overscroll-none overflow-hidden select-none w-screen h-screen flex flex-col items-center justify-center animate-fade caret-transparent">
      <div className="pb-40 items-center flex flex-col">
        <Welcome />
      </div>
      <Particle />
    </main>
  );
}
