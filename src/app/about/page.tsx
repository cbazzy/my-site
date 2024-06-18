"use client";
import Image from "next/image";
import Particle from "../components/particles";
import Welcome from "../components/welcome";
import NavBar from "../components/nav";
import Circles from "../components/circles";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <Circles />
      <h1></h1>
      <main className="min-h-120vh">
        <div className="caret-transparent z-10 file:w-screen flex flex-col px-[10%] desktop:px-[20%]">
          {" "}
          <br></br>
          <div className="desktop:px-[5%] px-0 pt-6">
            <div className="px-5 animate-fade backdrop-filter backdrop-blur-lg border-2 border-base-200 dark:border-stone-950 bg-stone-100 dark:bg-stone-950 bg-opacity-30 dark:bg-opacity-30 rounded-box p-4">
              <p className="animate-fade-up animate-duration-800 animate-once text-3xl font-semibold">
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
                Thanks for taking a look at my site. It&apos;s under
                construction, but I hope to have it finished soon.
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="caret-transparent z-10 file:w-screen flex flex-col px-[10%] desktop:px-[20%] pb-5 ">
          {" "}
          <br></br>
          <div className="desktop:px-[5%] px-0 pb-6">
            <div className="px-5 animate-fade animate-duration-[2000ms] animate-delay-[3000ms] backdrop-filter backdrop-blur-lg border-2 border-base-200 dark:border-stone-950 bg-stone-100 dark:bg-stone-950 bg-opacity-30 dark:bg-opacity-30 rounded-box p-4">
              <p className="animate-fade-up animate-duration-800 animate-once text-xl font-semibold">
                My latest project
              </p>
              <br></br>
              <p className="animate-fade animate-duration-1000 animate-delay-[1200ms] animate-once">
                The latest project I worked on was an e-learning quiz platform
                for the school of code. We worked in a team of 6 to create a
                full stack application that allows users to create and take
                quizzes and view their results.
              </p>
              <br></br>
              <p className="animate-fade animate-duration-1000 animate-delay-[2200ms] animate-once">
                There are two user modes: student and coach. Coaches can create
                and edit quizzes and compare results across all students.
                Students can complete quizzes and track their progress as well
                as earn achievements and see how they rank in the leaderboards.
              </p>
              <br></br>
              <p>
                Feel free to check out the project, create an account and have a
                play around.
              </p>
              <br></br>
              <p>Click the images below to visit the site. </p>
              <br></br>
              <p className="italic">
                Note: this is a desktop only application.
              </p>
              <br></br>
              <div className="flex flex-col items-center desktop:flex-row desktop:justify-center desktop:mx-5">
                <Link href="https://socbrain.vercel.app/" target="_blank">
                  <Image
                    className="p-5 hover:scale-[101%] transition-transform-shadow duration-300 ease-in-out rounded-[30px] hover:shadow-light hover:grayscale-0 dark:hover:shadow-dark active:scale-[99%] active:shadow-none grayscale-[70%]"
                    src="/socbrain2.png"
                    alt="School of Code"
                    width={1000}
                    height={300}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
