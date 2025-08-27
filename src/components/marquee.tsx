"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate } from "animejs";

const logos = [
  "/angular.svg",
  "bootstrap.svg",
  "express.svg",
  "github.svg",
  "javascript.svg",
  "mongodb.svg",
  "mysql.svg",
  "nextjs.svg",
  "nodejs.svg",
  "python.svg",
  "react.svg",
  "tailwind.svg",
];

export default function LogosMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Clonar los logos para loop infinito
    const clone = marquee.innerHTML;
    marquee.innerHTML += clone;

    animate(marquee, {
      translateX: ["0%", "-128%"], // mueve la fila hacia la izquierda
      duration: 6000, // 20s
      ease: "linear",
      loop: true,
    });
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <div ref={marqueeRef} className="flex space-x-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image src={logo} alt={`Logo ${index}`} width={50} height={50} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
