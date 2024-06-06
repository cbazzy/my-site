"use client";
import Image from "next/image";
import Particle from "./components/particles";
import Welcome from "./components/welcome";
import About from "./components/about";
import { useState } from "react";

type Visibility = {
  Welcome: boolean;
  About: boolean;
  // Add other components here
};

export default function Home() {
  const [visibility, setVisibility] = useState<Visibility>({
    Welcome: true,
    About: false,
    // Add other components here
  });

  const toggleVisibility = (componentName: keyof Visibility) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [componentName]: !prevVisibility[componentName],
    }));
  };

  return (
    <>
      <Particle />
      <main className="select-none w-screen h-screen flex flex-col items-center justify-center animate-fade">
        <div className="p-0 items-center flex flex-col">
          {visibility.Welcome && (
            <Welcome toggleVisibility={toggleVisibility} />
          )}
          {visibility.About && (
            <div className="animate-fade">
              <About toggleVisibility={toggleVisibility} />{" "}
            </div>
          )}
          {/* Add other components here */}
        </div>
      </main>
    </>
  );
}
