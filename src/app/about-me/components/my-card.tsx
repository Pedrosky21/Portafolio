import Image from "next/image";

export default function MyCard() {
  return (
    <>
      <div className="bg-modal shadow-glow-light overflow-hidden rounded-xl p-1 shadow-purple-900">
        <div className="md:flex">
          <div className="flex md:block items-center">
            <Image
              src="/yo5.jpeg"
              alt="Imagen mia"
              width={200}
              height={100}
              className="rounded-xl w-2/3 md:w-full h-auto"
            ></Image>
            <p className="text-2xl md:hidden ms-2">
              Hola! Soy{" "}
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-purple-900">
                <span className="relative text-white">Pedro</span>
              </span>
            </p>
          </div>
          <div className="ps-1 md:mx-2 mt-2">
            <p className="hidden text-2xl md:block">
              Hola! Soy{" "}
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-purple-900">
                <span className="relative text-white">Pedro</span>
              </span>
            </p>
            <div className="mt-2 space-y-1">
              <p>
                Disfruto de desarrollar software y de seguir buenas prácticas.
              </p>
              <p>Soy autónomo, comunicativo y me gusta trabajar en equipo.</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 ps-1 pe-3 pt-2 text-sm">
          <p>
            En mis tiempos libres me gusta entrenar y salir a merendar en
            distintos lugares, uno de mis favoritos es{" "}
            <strong className="text-amber-600">Panicafé</strong>.
          </p>
          <p>
            Siempre exploro diferentes hobbies o tecnologias nuevas y suelo
            aprender muchas cosas diferentes, sin dejar de lado enfocarme lo que
            más me gusta.
          </p>
        </div>
      </div>
    </>
  );
}
