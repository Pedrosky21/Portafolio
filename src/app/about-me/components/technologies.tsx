"use client";
import Image from "next/image";
import dataTechnologies from "@/data/technologies.json" assert { type: "json" };
import abilities from "@/app/about-me/data/abilities.json" assert { type: "json" };
import { useState, useRef, useEffect } from "react";
import { animate } from "animejs";

export default function MyTechnologies() {
  const [showedTechnology, setShowedTechnology] = useState<{
    title: string;
    description: string[];
  }>(dataTechnologies[0]);

  const technologies = [
    "python",
    "javascript",
    "nextjs",
    "angular",
    "nodejs",
    "github",
    "mysql",
    "mongodb",
  ];

  const showTechnology = (tech: string) => {
    const technology = dataTechnologies?.find((elem) => {
      if (elem.title.toLowerCase() === tech) {
        return elem;
      }
      if (tech === "nextjs" && elem.title.toLowerCase() === "next.js") {
        return elem;
      }
      if (tech === "nodejs" && elem.title.toLowerCase() === "node.js") {
        return elem;
      }
    });
    setShowedTechnology(technology ? technology : dataTechnologies[0]);
  };

  const colorTechnology = (tech: string) => {
    let className = "text-xl ";
    let color;
    switch (tech) {
      case "python":
        color = "text-green-500";
        break;
      case "javascript":
        color = "text-yellow-300";
        break;
      case "next.js":
        color = "text-white";
        break;
      case "angular":
        color = "text-red-600";
        break;
      case "node.js":
        color = "text-green-500";
        break;
      case "github":
        color = "text-gray-400";
        break;
      case "mysql":
        color = "text-blue-700";
        break;
      case "mongodb":
        color = "text-green-700";
        break;
      default:
        color = "text-white";
    }

    className += color;
    return className;
  };

  // Animacion toggle Habilidades
  const [selected, setSelected] = useState<"opcion1" | "opcion2">("opcion1");
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    btnRefs.current.forEach((btn, index) => {
      if (!btn) return;

      const isActive =
        (selected === "opcion1" && index === 0) ||
        (selected === "opcion2" && index === 1);

      animate(btn, {
        backgroundColor: isActive ? "#f59e0b" : "#0f172a", // azul activo / gris inactivo
        color: isActive ? "#0d0d0d" : "#fff",
        boxShadow: isActive
          ? [
              "0px 0px 0px rgba(0,0,0,0)", // estado inicial
              "0px 0px 15px rgba(147,51,234,1)", // estado final
            ]
          : "0px 0px 0px rgba(0,0,0,0)",
        duration: 200,
        easing: "easeOutElastic(1, .7)",
      });
    });
  }, [selected]);

  return (
    <>
      <div className="shadow-glow-light h-full w-full rounded-xl bg-slate-800 p-4 shadow-purple-900 transition-all duration-300 ease-in-out">
        <h2 className="md:hidden text-xl text-center mb-2 text-amber-500">Habilidades</h2>
        <div className="flex items-center justify-end space-x-2 md:ps-3 text-xl">
          <p className="hidden pt-1 md:flex">Habilidades:</p>
          <div className="flex overflow-hidden rounded-t-xl bg-slate-900 font-semibold">
            <button
              ref={(el) => {
                btnRefs.current[0] = el;
              }}
              onClick={() => setSelected("opcion1")}
              className="rounded-tl-xl px-2 pt-1 transition-colors focus:outline-none"
            >
              Técnicas
            </button>
            <button
              ref={(el) => {
                btnRefs.current[1] = el;
              }}
              onClick={() => setSelected("opcion2")}
              className="rounded-tr-xl px-2 pt-1 transition-colors focus:outline-none"
            >
              Blandas
            </button>
          </div>
        </div>
        <div className={`flex ${selected == "opcion1" ? "space-x-4" : ""}`}>
          <div
            className={`space-y-4 transition-all duration-500 ${selected == "opcion1" ? "max-w-20 opacity-100" : "max-w-0 opacity-0"}`}
          >
            {technologies.map((tech) => (
              <button
                key={tech}
                className={`flex flex-col rounded-xl p-2 outline-1 outline-black hover:scale-125 hover:outline-violet-900 ${
                  showedTechnology.title.toLowerCase() === tech ||
                  (tech === "nextjs" &&
                    showedTechnology.title.toLowerCase() === "next.js") ||
                  (tech === "nodejs" &&
                    showedTechnology.title.toLowerCase() === "node.js")
                    ? "outline-violet-900"
                    : ""
                } `}
                onClick={() => {
                  showTechnology(tech);
                }}
              >
                <Image
                  src={`./${tech}.svg`}
                  alt={`${tech}-logo`}
                  width={40}
                  height={40}
                ></Image>
              </button>
            ))}
          </div>
          <div className="w-full rounded-tl-xl rounded-b-xl bg-slate-900 p-5 pt-2">
            {selected == "opcion1" ? (
              <div>
                <h2
                  className={colorTechnology(
                    showedTechnology.title.toLowerCase()
                  )}
                >
                  {showedTechnology.title}
                </h2>
                <ul className="mt-2 space-y-2">
                  {showedTechnology.description.map(
                    (item: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden size-4 text-green-500 md:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>

                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : (
              <div>
                <ul className="divide-y-2 divide-amber-500">
                  {abilities.map(
                    (
                      ab: { title: string; description: string },
                      index: number
                    ) => (
                      <li key={index}>
                        <div className="mt-5 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="hidden size-4 text-green-500 md:block"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                          </svg>
                          <h2 className="text-green-500">{ab.title}</h2>
                        </div>
                        <p className="mb-5 ps-5">{ab.description}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
