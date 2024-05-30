"use client";
import Image from "next/image";
import Particle from "./components/particles";
import Welcome from "./components/welcome";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <br></br>
      <Welcome />
      <Particle />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </main>
  );
}
