"use client";
import Image from "next/image";
import Particle from "../components/particles";
import Welcome from "../components/welcome";
import NavBar from "../components/nav";
import Circles from "../components/circles";

export default function Home() {
  return (
    <>
      <NavBar />
      <Circles />
      <main className="z-10 file:w-screen h-screen flex flex-col px-[10%] desktop:px-[20%] ">
        <br></br>
        <div className="desktop:px-[5%] px-0 desktop:pt-12">
          <div className="px-5 animate-fade backdrop-filter backdrop-blur-lg border-2 border-base-200 dark:border-stone-950 bg-stone-100 dark:bg-stone-950 bg-opacity-30 dark:bg-opacity-30 rounded-box p-4">
            <p className="animate-fade-up animate-duration-800 animate-once text-lg font-semibold">
              Hello!
            </p>
            <br></br>
            <br></br>
            <p className="animate-fade animate-duration-1000 animate-delay-[1200ms] animate-once">
              I&apos;m Callum, a junior software developer based in the UK.
              I&apos;m currently studying at the School of Code bootcamp as a
              member of Cohort 16 and I&apos;m getting ready for my first role
              in the industry.
            </p>
            <br></br>
            <br></br>
            <p className="animate-fade animate-duration-1000 animate-delay-[2200ms] animate-once">
              Thanks for taking a look at my site. It&apos;s under construction,
              but I hope to have it finished soon.
            </p>
            <br></br>
          </div>
        </div>
      </main>
    </>
  );
}
