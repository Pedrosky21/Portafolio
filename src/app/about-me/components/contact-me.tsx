"use client";
import { useState } from "react";

export default function ContactMe() {
  const [showMail, setShowMail] = useState<boolean>(false);

  return (
    <>
      <div className={`rounded-xl p-4 lg:mb-0 shadow-glow-light shadow-purple-900
        ${showMail ? "bg-modal" : "bg-blue-900 "}`}>
        <button className="w-full cursor-pointer" onClick={() => setShowMail(!showMail)}>
          <h2 className="text-lg">Contactame</h2>
        </button>
        <div
          className={`transition-all duration-500 overflow-hidden ${
            showMail ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <p>pedroarreguez21@gmail.com</p>
          </div>
          <div className="flex space-x-2 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            <p>+54 3515183732</p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
