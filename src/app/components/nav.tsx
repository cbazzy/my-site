import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="z-50 sticky top-0 animate-fade-down animate-duration-200 animate-once navbar bg-stone-100 dark:bg-stone-950 border-b-2 border-base-200 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-30">
      <div className="navbar-start">
        <div className="dropdown">
          {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle"> */}
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg> */}
          {/* </div> */}
          {/* <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <button className="btn btn-ghost text-xl">callumb.me</button>
        </Link>
      </div>
      <div className="navbar-end">
        {/* <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button> */}
        <a href="/CV_June_24.pdf" download="Callum_B_CV.pdf">
          <button className="btn btn-ghost">Download CV</button>
        </a>
      </div>
    </div>
  );
}
