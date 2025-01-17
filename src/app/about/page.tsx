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
        <div className="caret-transparent z-10 w-screen flex flex-col px-[10%] desktop:px-[20%]">
          <br />
          <div className="desktop:px-[5%] px-0 py-2">
            <div className="px-5 animate-fade backdrop-filter backdrop-blur-lg border-2 border-base-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-950 bg-opacity-30 dark:bg-opacity-30 rounded-box p-4">
              <p className="animate-fade-up animate-duration-800 animate-once text-3xl font-semibold">
                Hello there! 👋
              </p>
              <br></br>
              <p className="animate-fade animate-duration-1000 animate-delay-[1000ms] animate-once">
                This is a place where I mess around with Next.js, Tailwind and
                other technologies. It&apos;s under construction, but I hope to
                have it finished soon.
              </p>
              <br />
              <p className="animate-fade animate-duration-1000 animate-delay-[1200ms] animate-once">
                Thanks for taking a look at my website.
              </p>
            </div>
          </div>
        </div>
        <div className="caret-transparent z-10 w-screen flex flex-col px-[10%] desktop:px-[20%]">
          <br />
          <div className="desktop:px-[5%] px-0 pb-6">
            <div className="px-5 animate-fade animate-duration-[2000ms] animate-delay-[3200ms] backdrop-filter backdrop-blur-lg border-2 border-base-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-950 bg-opacity-30 dark:bg-opacity-30 rounded-box p-4">
              <p className="animate-fade-up animate-duration-800 animate-once text-xl font-semibold">
                About Me
              </p>
              <br />
              <p className="animate-fade animate-duration-1000 animate-delay-[3600ms] animate-once">
                I&apos;m Callum, am dynamic junior developer and IT professional
                with a unique blend of bootcamp-intensive training and hands-on
                experience and a proud graduate of the School of Code program, a
                UK government-backed initiative renowned for its rigorous,
                industry-focused curriculum.
              </p>
              <br />
              <p className="animate-fade animate-duration-1000 animate-delay-[3800ms] animate-once font-semibold">
                My Educational Highlights
              </p>
              <br />
              <ul className="list-disc list-inside">
                <li className="animate-fade animate-duration-1000 animate-delay-[4000ms] animate-once">
                  Completed the highly selective School of Code bootcamp in
                  Birmingham
                </li>
                <li className="animate-fade animate-duration-1000 animate-delay-[4200ms] animate-once">
                  Trained in an environment that mirrors real-world development
                  teams
                </li>
                <li className="animate-fade animate-duration-1000 animate-delay-[4400ms] animate-once">
                  Experienced full software development lifecycle through
                  intensive, project-based learning
                </li>
                <li className="animate-fade animate-duration-1000 animate-delay-[4600ms] animate-once">
                  Developed strong collaborative skills through simulated
                  enterprise development scenarios
                </li>
              </ul>
              <br />
              <p className="font-semibold animate-fade animate-duration-1000 animate-delay-[4800ms] animate-once">
                Professional Highlights
              </p>
              <br />
              <ul className="list-disc list-inside">
                <li className="animate-fade animate-duration-1000 animate-delay-[5000ms] animate-once">
                  Combines fresh perspective with practical industry
                  understanding
                </li>
                <li className="animate-fade animate-duration-1000 animate-delay-[5200ms] animate-once">
                  Experienced in modern development practices and agile
                  methodologies
                </li>
                <li className="animate-fade animate-duration-1000 animate-delay-[5400ms] animate-once">
                  Proven ability to thrive in high-pressure, fast-paced
                  environments
                </li>
                <li className="animate-fade animate-duration-1000 animate-delay-[5600ms] animate-once">
                  Strong foundation in both technical skills and professional
                  team dynamics
                </li>
                <li className="animate-fade animate-duration-1000 animate-delay-[5800ms] animate-once">
                  Experienced in IT support and customer service roles, with
                  experience in the highly competitive MSP sector.
                </li>
              </ul>
              <br />
              <p className="animate-fade animate-duration-1000 animate-delay-[6000ms] animate-once line-through">
                I&apos;m currently open to opportunities to leverage this
                comprehensive training where I might contribute to
                forward-thinking teams at a forward-thinking organisation with a
                mission I can get behind.
              </p>
              <br />
              <p className="animate-fade animate-duration-1000 animate-delay-[6200ms] animate-once line-through">
                You are very welcome to take a look at my CV - you can download
                this with the button found in the top right.
              </p>
              <br />
              <p className="animate-fade animate-duration-1000 animate-delay-[6400ms] animate-once line-through">
                To the top left, you will find a link to my LinkedIn profile, my
                GitHub account, and my email address. Feel free to reach out.
              </p>
              <br></br>
              <p className="animate-fade animate-duration-1000 animate-delay-[6600ms] animate-once line-through">
                Feel free to reach out.
              </p>
              <br></br>
              <p className="animate-fade animate-duration-1000 animate-delay-[6900ms] animate-once font-black">
                Update: I&apos;m now happily employed in a full-time role! 😃
              </p>
            </div>
          </div>
        </div>
        <div className="caret-transparent z-10 w-screen flex flex-col px-[10%] desktop:px-[20%] pb-5">
          <br />
          <div className="desktop:px-[5%] px-0 pb-6">
            <div className="px-5 animate-fade animate-duration-[2000ms] animate-delay-[6800ms] backdrop-filter backdrop-blur-lg border-2 border-base-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-950 bg-opacity-30 dark:bg-opacity-30 rounded-box p-4">
              <p className="animate-fade-up animate-duration-800 animate-once text-xl font-semibold">
                My final project for School of Code: SocBrain
              </p>
              <br />
              <p className="animate-fade animate-duration-1000 animate-delay-[7000ms] animate-once">
                The latest project I worked on was an e-learning quiz platform
                for the school of code. We worked in a team of 6 to create a
                full stack application that allows users to create and take
                quizzes and view their results.
              </p>
              <br />
              <p className="animate-fade animate-duration-1000 animate-delay-[7200ms] animate-once">
                There are two user modes: student and coach. Coaches can create
                and edit quizzes and compare results across all students.
                Students can complete quizzes and track their progress as well
                as earn achievements and see how they rank in the leaderboards.
              </p>
              <br />
              <p>
                Feel free to check out the project, create an account and have a
                play around.
              </p>
              <br />
              <p>Click the images below to visit the site. </p>
              <br />
              <p className="italic">
                Note: this is a desktop only application.
              </p>
              <br />
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
