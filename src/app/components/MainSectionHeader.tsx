"use client";

import { useState, useRef, useEffect, ChangeEvent } from "react";

type Props = {
  search?: boolean;
};

export default function MainSectionHeader({ search }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const visible = searchTerm ? "inline-block" : "none";
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="py-1 px-6 flex justify-between items-center absolute w-full bg-[rgba(0,0,0,.5)]">
      <div className="flex gap-2 items-center">
        <button
          type="button"
          aria-label="Go back"
          className="bg-[rgba(0,0,0,.5)] w-8 h-8 rounded-full"
        >
          <svg
            role="img"
            aria-hidden="true"
            className="w-4 h-4 ml-2"
            viewBox="0 0 16 16"
            fill="#b3b3b3"
          >
            <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
          </svg>
        </button>
        <button
          type="button"
          aria-label="Go forward"
          className="bg-[rgba(0,0,0,.5)] w-8 h-8 rounded-full"
        >
          <svg
            role="img"
            aria-hidden="true"
            className="w-4 h-4 ml-2"
            viewBox="0 0 16 16"
            fill="#b3b3b3"
          >
            <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
          </svg>
        </button>
        {search && (
          <div className="relative">
            <form role="search">
              <input
                ref={inputRef}
                className="py-[6px] px-9 text-sm text-white bg-[#242424] h-12 rounded-full w-[365px]"
                type="text"
                placeholder="What do you want to listen to?"
                spellCheck={false}
                value={searchTerm}
                onChange={handleSearch}
              />
            </form>
            <div className="absolute h-full top-0 left-3 flex items-center">
              <svg
                role="img"
                aria-hidden="true"
                className="w-4 h-4 inline-block"
                viewBox="0 0 16 16"
                fill="white"
              >
                <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
              </svg>
            </div>
            <div className="absolute h-full top-0 right-3 flex items-center">
              <button
                onClick={() => {
                  setSearchTerm("");
                  inputRef.current?.focus();
                }}
                style={{ display: visible }}
              >
                <svg
                  role="img"
                  aria-hidden="true"
                  className="w-4 h-4 inline-block"
                  viewBox="0 0 16 16"
                  fill="white"
                >
                  <path d="M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 1 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06Z"></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 items-center text-[#a7a7a7] font-bold text-[17px]">
        <button className="hover:text-white hover:scale-105">Premium</button>
        <button className="hover:text-white hover:scale-105">Support</button>
        <button className="hover:text-white hover:scale-105">Download</button>
        <div className="bg-white h-[25px] m-4 w-[1px] blur-[1px] text-sm"></div>
        <button className="py-2 pr-8 pl-2 text-[15px] hover:text-white hover:scale-105">
          Sign up
        </button>
        <button className="text-black bg-white text-[15px] rounded-full font-bold h-12 hover:scale-105">
          <span className="py-2 px-8">Log in</span>
        </button>
      </div>
    </header>
  );
}
