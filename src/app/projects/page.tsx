"use client";

import { useRef, useState, useEffect } from "react";
import { animate } from "animejs";

import Nav from "@/components/nav";
import Technologies from "@/components/technologies";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  const [selected, setSelected] = useState<"FullStack" | "Data Analysis">(
    "FullStack"
  );
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    btnRefs.current.forEach((btn, index) => {
      if (!btn) return;

      const isActive =
        (selected === "FullStack" && index === 0) ||
        (selected === "Data Analysis" && index === 1);

      animate(btn, {
        backgroundColor: isActive ? "#f43f5e" : "#0f172a", // ambar activo / gris inactivo
        color: isActive ? "#fff" : "#fff",
        scale: isActive ? 1 : 1, // efecto rebote
        duration: 200,
        easing: "easeOutElastic(1, .7)",
      });
    });

    const scrollElements = scrollRefs.current;
    if (!scrollElements) return;
    animate(scrollElements, {
      translateY: [20, -10],
      ease: "inOut",
      loop: true,
      autoplay: true,
      alternate: true,
    });
  }, [selected]);

  const scrollAbajo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const section = e.currentTarget.closest("section"); // la sección actual
    const next = section?.nextElementSibling as HTMLElement | null; // la siguiente

    // Buscar el contenedor de scroll
    const scrollContainer = document.querySelector(
      ".scroll-container"
    ) as HTMLElement | null;

    if (next && scrollContainer) {
      // Hacer que el contenedor scrollee hasta la posición de la siguiente sección
      scrollContainer.scrollTo({
        top: next.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="bg-gradient-violet w-full md:h-full md:overflow-hidden">
        <Nav></Nav>

        <div className="flex justify-center">
          <div className="mt-5 mb-2 rounded-xl border-2 border-black bg-blue-800 p-2 backdrop-blur-md">
            <h2 className="text-xl font-semibold">Mis proyectos destacados</h2>
          </div>
        </div>

        <div className="mb-4 flex justify-center">
          <div className="flex justify-end md:w-3/6">
            <div className="flex justify-around overflow-hidden rounded-xl border-2 border-black bg-slate-900">
              {["FullStack", "Data Analysis"].map((label, index) => (
                <button
                  key={label}
                  ref={(el) => {
                    btnRefs.current[index] = el;
                  }}
                  onClick={() =>
                    setSelected(index === 0 ? "FullStack" : "Data Analysis")
                  }
                  className="px-6 py-2 text-sm font-semibold transition-colors focus:outline-none"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {
          // Por si no hay proyectos con la categoria a filtrar:
          projects.filter((proj) => proj.category?.includes(selected))
            .length === 0 && (
            <div className="flex w-full justify-center">
              <p className="text-md mx-2 text-center text-gray-200 md:text-xl">
                Todavía no subí los proyectos de {selected}. Soon!
              </p>
            </div>
          )
        }

        <div className="scroll-container snap-y snap-mandatory pb-5 md:mb-0 md:h-screen md:overflow-y-scroll">
          {projects
            .filter((proj) => proj.category?.includes(selected))
            .map((proj, index) => (
              <section
                key={proj.id}
                className="mt-5 flex w-full snap-start flex-col items-center pb-5 md:mt-0 md:h-screen"
              >
                <div className="flex w-5/6 flex-col rounded-2xl border border-white/20 bg-purple-500/10 p-4 text-center shadow-lg shadow-purple-700/50 backdrop-blur-md md:w-3/6">
                  <div className="pointer-events-none absolute top-0 left-0 h-1/3 w-full rounded-t-2xl bg-gradient-to-b from-purple-700/10 to-transparent"></div>
                  <h3 className="text-xl font-bold text-rose-500">
                    {proj.title}
                  </h3>
                  <div className="mt-2 space-x-5 md:flex">
                    <div className="flex w-full flex-col items-center justify-between md:h-64">
                      <div>
                        <Image
                          src={proj.image}
                          alt={proj.image}
                          width={300}
                          height={100}
                          className="rounded-xl"
                        ></Image>
                      </div>
                      <div className="mt-2 flex justify-center md:mt-0">
                        <div className="hover:shadow-glow-light-soft w-64 md:w-full rounded-full border-2 border-black bg-blue-800 pe-8 lg:px-5 lg:py-1">
                          <div className="pl-5 scale-90 md:pl-0 md:scale-75 lg:scale-100">
                            <Technologies
                              items={proj.technologies}
                            ></Technologies>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex-col justify-between pt-2 text-start md:flex md:h-64">
                      <p>{proj.description}</p>
                      <div className="mt-2 flex justify-end md:mt-0">
                        <a
                          href={proj.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:shadow-glow-light flex items-center rounded-2xl border-2 border-black bg-blue-700 p-2 transition-transform duration-300 hover:scale-110"
                        >
                          <Image
                            src="github.svg"
                            alt="github icon"
                            width={30}
                            height={30}
                          ></Image>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 hidden md:block">
                  {index < projects.length - 1 && (
                    <div
                      ref={(el) => {
                        scrollRefs.current[index] = el; // asigna el ref
                      }}
                      className="flex flex-col items-center"
                    >
                      <button
                        onClick={scrollAbajo}
                        className="flex w-10 items-center rounded-full border border-blue-500 bg-blue-700/20 p-2"
                      >
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
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </button>

                      <p className="mt-3 text-center opacity-60">
                        Scrollea para el sig.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            ))}
        </div>
      </div>
    </>
  );
}
