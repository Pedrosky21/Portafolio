import { animate } from "animejs";
import Image from "next/image";
import { useRef, useState } from "react";

export default function MyCard() {
  const outlineRef = useRef<HTMLAnchorElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Para animacion de la card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // posición del mouse dentro de la card
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    let rotateX = 0;
    let rotateY = 0;
    if (y < centerY + 35) {
      rotateY = ((x - centerX) / centerX) * 15; // rango de -15 a 15 grados
      rotateX = -((y - centerY) / centerY) * 15; // negativo para que siga la dirección natural
    }

    animate(cardRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 300,
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    animate(cardRef.current, {
      rotateY: "0deg",
      rotateX: "0deg",
      duration: 500,
    });
  };

  // Para animacion del boton de descargar
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
      <div style={{ perspective: 3500 }}>
        <div
          style={{ transformStyle: "preserve-3d" }}
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="bg-darkest-violet shadow-glow-light-soft hover:shadow-violet-big flex justify-center rounded-xl py-3 shadow-purple-900 outline-1 outline-black md:w-64 md:p-1"
        >
          <div className="">
            <div>
              <Image
                src={"/yo7.png"}
                alt="Descripción de la imagen"
                width={250}
                height={250}
                className="rounded-t-xl object-contain"
              ></Image>
            </div>

            <div className="">
              <h2 className="p-1 text-xl text-rose-500">Pedro Arreguez</h2>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="text-light-violet size-5"
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
                    className="text-light-violet size-5"
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
                    className="text-light-violet size-5"
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
                  href="CV Pedro Arreguez.pdf"
                  onClick={handleClick}
                  ref={outlineRef}
                  className="flex w-full items-center rounded-full border border-purple-800 py-1 hover:border-purple-600 hover:bg-purple-950"
                  download
                >
                  <div
                    ref={circleRef}
                    className="bg-light-violet ms-1 me-9 rounded-full p-2"
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
    </>
  );
}
