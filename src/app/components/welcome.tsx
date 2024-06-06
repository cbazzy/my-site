import { Button } from "@headlessui/react";
import Link from "next/link";

type Visibility = {
  Welcome: boolean;
  About: boolean;
  // Add other components here
};

type ToggleVisibility = (componentName: keyof Visibility) => void;

type WelcomeProps = {
  toggleVisibility: ToggleVisibility;
};

export default function Welcome({ toggleVisibility }: WelcomeProps) {
  const handleClick = () => {
    toggleVisibility("Welcome");
    toggleVisibility("About");
  };

  return (
    <>
      <h1 className="text-4xl desktop:text-7xl font-thin select-none">
        Callum Basnett
      </h1>
      <h2 className="text-2xl desktop:text-4xl select-none">
        Junior Software Developer
      </h2>
      <br></br>
      <Link href="/">
        <Button
          onClick={handleClick}
          className="select-none font-light mt-0 inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white "
        >
          Learn more...
        </Button>
      </Link>
    </>
  );
}
