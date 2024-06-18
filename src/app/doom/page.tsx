"use client";
import Image from "next/image";
import Particle from "../components/particles";
import Welcome from "../components/welcome";
import NavBar from "../components/nav";
import Circles from "../components/circles";
import Link from "next/link";

export default function Doom() {
  return (
    <>
      <NavBar />
      <h1></h1>
      <main
        className="z-50 flex align-middle"
        style={{ height: "calc(100vh - 60px)", overflow: "hidden" }} // Step 2: Apply overflow hidden to the container
      >
        <iframe
          className="-mr-4"
          src="https://dosdeck.com/game/doom"
          width="150%" // Increase width to ensure sides can be hidden
          height="100%"
          style={{
            border: "none", // Optional: Removes the border for a cleaner look
          }}
        ></iframe>
      </main>
    </>
  );
}
