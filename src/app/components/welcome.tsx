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
      <div>
        <a
          href="/about"
          className="m-4 group relative inline-block overflow-hidden rounded border border-gray-400 bg-gray-800  px-12 py-3 text-sm font-medium text-slate-200 hover:text-white focus:outline-none focus:ring active:bg-gray-600 active:text-white"
        >
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-sky-200 dark:border-gray-100 transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-sky-200 dark:border-gray-100 transition-all duration-200 group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-sky-200 dark:border-gray-100 transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-sky-200 dark:border-gray-100 transition-all duration-200 group-hover:h-full"></span>
          Learn more...
        </a>
      </div>
    </>
  );
}
