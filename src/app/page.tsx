"use client";
import Image from "next/image";
import Particle from "./components/particles";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Particle />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-4xl font-semibold desktop:text-8xl">
        Callum Basnett
      </h1>
      <h2 className="text-2xl desktop:text-4xl">Junior Software Developer</h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </main>
  );
}
