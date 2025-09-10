"use client";

import { useState, useRef } from "react";
import { animate } from "animejs";

import Nav from "@/components/nav";
import Image from "next/image";
import LogosMarquee from "@/components/marquee";
import Technologies from "@/components/technologies";
import { projects } from "@/data/projects";

export default function Home() {
  const project1 = projects[2];
  const project2 = projects[0];
  const projectsToShow = [project1, project2];

  const [isAnimating, setIsAnimating] = useState(false);

  const [icon, setIcon] = useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>
  );

  const outlineRef = useRef<HTMLAnchorElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const handleClick = () => {
    // primeras lineas para no interrumpir animacion o reiniciar con clicks
    if (isAnimating) return; // si ya hay animación, salir
    setIsAnimating(true); // animando

    let reversed = false;
    const circle = circleRef.current;
    if (!circle) return;
    const circleAnimation = animate(circle, {
      autoplay: false,
      rotate: "1turn",
      duration: 600,
      ease: "easeOut",
      loop: false,
      onComplete: () => {
        if (!reversed) {
          // Para que solo se ejecute al completar una vez y no en reversed
          reversed = true;
          circle.style.backgroundColor = "#178236";
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          );
        }
      },
    });

    const outline = outlineRef.current;
    if (!outline) return;
    const outlineAnimation = animate(outline, {
      autoplay: false,
      width: "42px",
      duration: 600,
      onComplete: (self) => {
        setTimeout(() => {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          );
          self.reverse();
          circleAnimation.reverse();
          circle.style.backgroundColor = "#2b7fff";
        }, 1000);
      },
    });

    let reversedText = false;
    const text = textRef.current;
    if (!text) return;
    animate(text, {
      translateY: ["0%", "50%"],
      duration: 300,
      ease: "linear",
      loop: false,
      onComplete: (self) => {
        if (!reversedText) {
          reversedText = true;
          const el = document.getElementById("text");
          if (el) el.style.display = "none";
          outlineAnimation.play();
          circleAnimation.play();
          setTimeout(() => {
            self.reverse();
            if (el) el.style.display = "block";
            setTimeout(() => setIsAnimating(false), 100);
          }, 2300);
        }
      },
    });
  };

  return (
    <>
      <div className="bg-gradient-violet min-h-screen w-full">
        <Nav />

        <div className="flex w-full justify-center pt-10">
          <div className="grid w-5/6 grid-cols-1 space-y-5 sm:grid-cols-3 md:w-2/3 md:space-y-0">
            <div className="min-h-full">
              <div className="bg-modal flex justify-center rounded-xl py-3 md:w-64 md:p-1">
                <div className="">
                  <Image
                    src={"/yo4.jpeg"}
                    alt="Descripción de la imagen"
                    width={250}
                    height={250}
                    className="rounded-t-xl object-contain"
                  ></Image>

                  <div className="">
                    <h2 className="p-1 text-xl">Pedro Arreguez</h2>
                    <div className="space-y-2 text-sm">
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5 text-green-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>

                        <p> Estudiante de Ing. en Sistemas</p>
                      </div>

                      <div className="flex items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5 text-green-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>

                        <p className="p-0">Córdoba, Argentina</p>
                      </div>

                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5 text-green-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>

                        <p> 23 años </p>
                      </div>

                      <div className="flex items-center space-x-1 px-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>

                        <p> pedroarreguez21@gmail.com </p>
                      </div>
                    </div>

                    <div className="mt-2 flex justify-center">
                      <a
                        href="CV.pdf"
                        onClick={handleClick}
                        ref={outlineRef}
                        className="flex w-full items-center rounded-full border border-purple-800 py-1 hover:border-purple-600 hover:bg-fuchsia-800"
                        download
                      >
                        <div
                          ref={circleRef}
                          className="ms-1 me-9 rounded-full bg-blue-700 p-2"
                        >
                          {icon}
                        </div>
                        <p
                          id="text"
                          ref={textRef}
                        >
                          Descargar CV
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="bg-modal flex flex-col rounded-xl p-2 md:min-h-full md:w-full">
                <h2 className="text-center text-xl text-amber-500 md:text-start">
                  Proyectos destacados
                </h2>
                <div className="grid flex-1 grid-rows-2 space-y-2 divide-y-1 rounded-xl bg-slate-900 px-4 md:w-full">
                  {projectsToShow.map((proj, index) => (
                    <div
                      key={index}
                      className="group relative w-full items-center py-2 transition-all hover:translate-x-2 md:flex"
                    >
                      <div className="space-y-1 md:w-full">
                        <h3 className="text-md text-amber-400">{proj.title}</h3>
                        <div className="me-5 flex flex-col justify-between md:h-32">
                          <p className="text-sm">{proj.description}</p>
                          <div className="pe-6 md:pe-0">
                            <Technologies
                              items={proj.technologies}
                            ></Technologies>
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <Image
                          src={proj.image}
                          alt="Project Image"
                          width={300}
                          height={100}
                          className="rounded-xl group-hover:opacity-75"
                        ></Image>
                        <button className="hidden absolute right-27 bottom-10 rounded-xl border-2 border-black bg-purple-600 px-3 py-1 text-xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Mas info...
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="me-0 mt-0 w-full rounded-xl bg-slate-800 p-2 outline outline-offset-4 outline-purple-500 md:me-10 md:mt-8 md:w-64 md:bg-transparent md:p-0 md:outline-0">
              <h2 className="mb-3 block text-center text-xl text-amber-500 md:hidden">
                Mis redes
              </h2>
              <div className="flex justify-around">
                <a
                  href="https://github.com/Pedrosky21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl outline-offset-4 outline-purple-500 transition-transform duration-300 hover:scale-110 hover:outline-double"
                >
                  <Image
                    src="github.svg"
                    alt="Github Icon"
                    width={50}
                    height={50}
                  ></Image>
                </a>
                <a
                  href="https://www.instagram.com/pedro.sky21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl outline-offset-4 outline-purple-500 transition-transform duration-300 hover:scale-110 hover:outline-double"
                >
                  <Image
                    src="instagram.svg"
                    alt="Instagram Icon"
                    width={50}
                    height={50}
                  ></Image>
                </a>
              </div>
            </div>

            <div className="bg-modal col-span-2 mt-5 mb-10 rounded-2xl py-2 outline outline-offset-4 outline-purple-500 md:mb-0">
              <div className="overflow-hidden">
                <h2 className="mb-3 block text-center text-xl text-amber-500 md:hidden">
                  Tecnologías
                </h2>
                <LogosMarquee></LogosMarquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
