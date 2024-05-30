"use client";
import Image from "next/image";
import Particle from "../components/particles";
import Welcome from "../components/welcome";
import NavBar from "../components/nav";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="w-screen h-screen flex flex-col px-[20%] desktop:px-[30%]">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="animate-fade-up animate-duration-800 animate-once text-lg font-semibold">
          Hello!
        </p>
        <br></br>
        <br></br>
        <p className="animate-fade animate-duration-1000 animate-delay-1000 animate-once">
          I&apos;m Callum, a junior software developer based in the UK. I&apos;m
          currently studying at the School of Code bootcamp as a member of
          Cohort 16 and I&apos;m getting ready for my first role in the
          industry.
        </p>
        <br></br>
        <br></br>
        <p className="animate-fade animate-duration-1000 animate-delay-[2000ms] animate-once">
          Thanks for taking a look at my site. It&apos;s under construction, but
          I hope to have it finished soon.
        </p>
      </main>
    </>
  );
}
