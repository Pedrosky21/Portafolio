import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="flex justify-center pt-5">
        <div className="flex justify-between w-1/3">
          <div className="flex">
            <Link href="/">
              <button className="outline-2 outline-offset-2 outline-purple-900 px-5 py-2 rounded-xl">
                Inicio
              </button>
            </Link>
          </div>
          <div className="flex">
            <Link href="/proyects">
              <button className="outline-2 outline-offset-2 outline-purple-900 px-5 py-2 rounded-xl">
                Proyectos
              </button>
            </Link>
          </div>
          <div className="flex">
            <Link href="/about-me">
              <button className="outline-2 outline-offset-2 outline-purple-900 px-5 py-2 rounded-xl">
                Sobre mi
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="mt-3 border-t-1 border-white w-2/5" />
      </div>
    </>
  );
}
