import { Button } from "@headlessui/react";
import Link from "next/link";

export default function Welcome() {
  return (
    <>
      <h1 className="animate-fade text-4xl desktop:text-7xl font-thin select-none">
        Callum Basnett
      </h1>
      <h2 className="animate-fade text-2xl desktop:text-4xl select-none">
        Junior Software Developer
      </h2>
      <br></br>
      <Link href="/about">
        <Button className="animate-fade animate-delay-100 select-none font-light mt-0 inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white ">
          Learn more...
        </Button>
      </Link>
    </>
  );
}
