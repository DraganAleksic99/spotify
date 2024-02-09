"use client";

import Suggestion from "./Suggestion";
import { useState, UIEvent } from "react";

export default function YourLibrary() {
  const [opacity, setOpacity] = useState(0);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    let scrollTop = (event.target as HTMLElement).scrollTop;
    if (scrollTop === 0) setOpacity(0);
    else setOpacity(1);
  };

  return (
    <section className="bg-[#121212] mt-2 rounded-t-lg">
      <header className=" px-4 py-2 relative z-10">
        <div className="h-10 flex justify-between items-center text-[#b3b3b3] font-bold">
          <span className="px-2 py-1">
            <svg
              className="w-6 h-6 inline-block mr-3"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="#b3b3b3"
            >
              <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
            </svg>
            Your Library
          </span>
          <span className="p-2">
            <svg
              className="w-4 h-4"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="#b3b3b3"
            >
              <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
            </svg>
          </span>
        </div>
      </header>
      <div className="scrollable-container overflow-hidden relative z-0">
        <div className="shadow shadow--top" style={{ opacity }}></div>
        <div
          className="scrollable-content max-h-[260px] overflow-y-hidden hover:overflow-y-scroll "
          onScroll={handleScroll}
        >
          <Suggestion
            title="Create your first playlist"
            subtitle={`It\'s easy, we\'ll help you`}
            buttonText="Create playlist"
          />
          <Suggestion
            title={`Let\'s find some podcasts to follow`}
            subtitle={`We\'ll keep you updated on new episodes`}
            buttonText="Browse podcasts"
          />
        </div>
      </div>
    </section>
  );
}
