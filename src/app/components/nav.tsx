import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function NavBar() {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const captchaRef = useRef<HTMLDivElement>(null);

  const onCaptchaChange = (value: any) => {
    console.log("Captcha value: ", value);
    if (value) {
      triggerDownload();
    }
  };

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV_June_24.pdf";
    link.download = "Callum_B_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowCaptcha(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        (captchaRef.current as HTMLElement) &&
        !(captchaRef.current as HTMLElement).contains(event.target)
      ) {
        setShowCaptcha(false); // Step 3: Check if the click is outside
      }
    };

    const handleFocusChange = (event: any) => {
      if (
        (captchaRef.current as HTMLElement) &&
        !(captchaRef.current as HTMLElement).contains(event.target)
      ) {
        setShowCaptcha(false); // Step 3: Check if the focus change is outside
      }
    };

    if (showCaptcha) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("focusin", handleFocusChange);
    }

    // Step 4: Cleanup event listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("focusin", handleFocusChange);
    };
  }, [showCaptcha]); // Re-run when showCaptcha changes

  return (
    <div className="z-50 sticky top-0 animate-fade-down animate-duration-200 animate-once navbar bg-stone-100 dark:bg-stone-950 border-b-2 border-base-200 dark:border-stone-800 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle ml-2"
          >
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-100 dark:bg-stone-800 rounded-box w-52 "
          >
            {/* z-50 sticky top-0 animate-fade-down animate-duration-200 animate-once navbar bg-stone-100 dark:bg-stone-950 border-b-2 border-base-200 dark:border-stone-800 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-30 */}
            <li>
              <a
                href="https://www.linkedin.com/in/callum-basnett/"
                target="_blank"
              >
                <svg
                  className="fill-black dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/cbazzy" target="_blank">
                <svg
                  className="fill-black dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Github
              </a>
            </li>
            <li>
              <a href="mailto:callum@callumb.me" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                Email Me
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <button className="btn btn-ghost text-xl">callumb.me</button>
        </Link>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost btn-circle mr-2"
          onClick={() => setShowCaptcha(true)}
        >
          <svg
            className="fill-black dark:fill-white"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" />
          </svg>
        </button>
        {showCaptcha && (
          <div
            ref={captchaRef}
            className="flex-col fixed mt-60 mr-2 p-4 flex px-5 animate-fade-left animate-duration-300 backdrop-filter backdrop-blur-lg border-2 border-base-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800 bg-opacity-30 dark:bg-opacity-30 rounded-box"
          >
            <p className="text-center pb-2">Please confirm to download.</p>
            <ReCAPTCHA
              className="animate-fade"
              sitekey="6LcuYPspAAAAAK_w0I0JU3YIjEEXR7ML5elgWxLi"
              onChange={onCaptchaChange}
              onExpired={() => setShowCaptcha(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
