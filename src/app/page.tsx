import Nav from "@/components/nav";
import Image from "next/image";
import LogosMarquee from "@/components/marquee";

export default function Home() {
  return (
    <>
      <Nav />

      <div className="flex justify-center w-full h-5/6 pt-10">
        <div className="flex h-5/6 w-full justify-center">
          <div className="flex justify-between w-3/4 h-5/6">
            <div>
              <div className="flex justify-center bg-modal w-64 me-10 rounded-xl p-2">
                <div className="">
                  <Image
                    src={"/yo4.jpeg"}
                    alt="Descripción de la imagen"
                    width={250}
                    height={250}
                    className="object-contain rounded-t-xl"
                  ></Image>

                  <div className="py-2">
                    <h2 className="p-1 text-xl">Pedro Arreguez</h2>
                    <div className="text-sm space-y-2">
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

                        <p>Córdoba, Argentina</p>
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

                    <div className="flex justify-center mt-2">
                      <button className="w-full rounded-xl border border-purple-800 bg-violet-900 py-1 hover:border-purple-600 hover:bg-pink-500">
                        Descargar CV
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-around w-64 mt-10">
                <button className="hover:scale-110 transition-transform duration-300 hover:outline-double outline-purple-500 outline-offset-4 rounded-xl">
                  <Image
                    src="github.svg"
                    alt="Github Icon"
                    width={50}
                    height={50}
                  ></Image>
                </button>
                <button className="hover:scale-110 transition-transform duration-300 hover:outline-double outline-purple-500 outline-offset-4 rounded-xl">
                  <Image
                    src="instagram.svg"
                    alt="Instagram Icon"
                    width={50}
                    height={50}
                  ></Image>
                </button>
              </div>
            </div>

            <div className="flex flex-col w-2/3 h-5/6">
              <div>
                <h2 className="text-xl text-amber-500">Proyectos destacados</h2>
                <div className="flex flex-col justify-center space-y-2 flex-1 bg-modal rounded-xl p-4 h-full">
                  <div className="flex justify-between">
                    <div className="space-y-1">
                      <h3 className="text-md text-amber-400">Mangas App</h3>
                      <div className="flex flex-col justify-between h-40">
                        <p className="text-sm w-96">
                          Aplicación web de mangas que permite agregar, editar y
                          eliminar mangas (CRUD), los cuales se almacenan en una
                          base de datos (SQLite).
                        </p>
                        <div className="flex space-x-4">
                          <Image
                            src="/angular.svg"
                            alt="Angular Icon"
                            width={40}
                            height={40}
                          ></Image>
                          <Image
                            src="/bootstrap.svg"
                            alt="Bootstrap Icon"
                            width={40}
                            height={40}
                          ></Image>
                          <Image
                            src="/nodejs.svg"
                            alt="NodeJs Icon"
                            width={40}
                            height={40}
                          ></Image>
                          <Image
                            src="/express.svg"
                            alt="Express Icon"
                            width={40}
                            height={40}
                          ></Image>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Image
                        src="/ProyectoManga.png"
                        alt="Proyecto Manga"
                        width={400}
                        height={400}
                        className="rounded-xl"
                      ></Image>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <hr className="border-t-1 border-white w-full" />
                  </div>

                  <div className="flex justify-between">
                    <div className="space-y-1">
                      <h3 className="text-md text-amber-400">Space App</h3>
                      <div className="flex flex-col justify-between h-5/6">
                        <p className="text-sm w-96">
                          Aplicación web de notas con autenticación a través de
                          JWT (inicio de sesión y registro). Conexión a una base
                          de datos (MongoDB) para almacenar los usuarios y sus
                          notas.
                        </p>
                        <div className="flex space-x-4">
                          <Image
                            src="/nextjs.svg"
                            alt="NextJs Icon"
                            width={40}
                            height={40}
                          ></Image>
                          <Image
                            src="/react.svg"
                            alt="React Icon"
                            width={40}
                            height={40}
                          ></Image>
                          <Image
                            src="/tailwind.svg"
                            alt="Tailwind Icon"
                            width={40}
                            height={40}
                          ></Image>
                          <Image
                            src="/nodejs.svg"
                            alt="NodeJs Icon"
                            width={40}
                            height={40}
                          ></Image>
                          <Image
                            src="/express.svg"
                            alt="Express Icon"
                            width={40}
                            height={40}
                          ></Image>
                          <Image
                            src="/mongodb.svg"
                            alt="MongoDB Icon"
                            width={40}
                            height={40}
                          ></Image>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Image
                        src="/ProyectoSpace.png"
                        alt="Proyecto Space"
                        width={400}
                        height={400}
                        className="rounded-xl"
                      ></Image>
                    </div>
                  </div>
                </div>

                <div className="mt-5 h-20 outline outline-purple-500 outline-offset-4 rounded-2xl">
                  <h3 className="flex justify-center my-1">
                    Competecias técnicas
                  </h3>
                  <div className="overflow-hidden">
                    <LogosMarquee></LogosMarquee>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
