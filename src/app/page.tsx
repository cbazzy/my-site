"use client";
import Image from "next/image";
import Particle from "./components/particles";
import Welcome from "./components/welcome";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <main className="overscroll-none overflow-hidden select-none w-screen h-screen flex flex-col items-center justify-center animate-fade caret-transparent">
      <div className="pb-40 items-center flex flex-col">
        <Welcome />
      </div>
      <Particle />
    </main>
  );
}
