"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/projects", label: "Proyectos" },
    { href: "/about-me", label: "Sobre Mi" },
  ];

  return (
    <>
      {
        // Version desk
      }
      <div className="hidden md:flex justify-center pt-5">
        <div className="flex w-1/3 justify-between">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
            >
              <button
                className={`rounded-xl px-5 py-2 outline-3 outline-offset-2 outline-purple-900 
                  transition-transform duration-300 ease-out hover:scale-105 hover:bg-purple-900
                  ${pathname === link.href ? "bg-purple-900 outline-double" : ""}`}
              >
                {link.label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {
        // Version movil
      }
      <div className="flex md:hidden justify-center pt-5">
        <div className="flex space-x-3 justify-between">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
            >
              <button
                className={`rounded-xl px-5 py-2 outline-3 outline-offset-2 outline-purple-900 
                  transition-transform duration-300 ease-out hover:scale-105 hover:bg-purple-900
                  ${pathname === link.href ? "bg-purple-900 outline-double" : ""}`}
              >
                {link.label}
              </button>
            </Link>
          ))}
        </div>
      </div>


      <div className="flex justify-center mt-2">
        <hr className="mt-3 w-2/5 border-t-1 border-white" />
      </div>
    </>
  );
}
